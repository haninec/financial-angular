import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { Invoice } from 'app/shared/models/invoice.models';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { InvoiceFilter } from 'app/shared/filters/invoice.filter';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { InvoiceDetailsComponent } from '../details/invoice-details.component';
import { GetTokenDataService } from 'app/shared/services/user.service';


@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent extends BaseListComponent<Invoice> implements OnInit, OnDestroy {
    public filter: InvoiceFilter = new InvoiceFilter({ hasPagination: true });
    public invoices: MatTableDataSource<Invoice> = new MatTableDataSource([]);
    public query: string;


    displayedColumns: string[] = [
        'invoice_date',
        'company',
        'card',
        'is_credit_card',
        'is_income',
        'invoice_value',
        'actions'
    ];
    @ViewChild(MatSort, { static: true }) sort: MatSort
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: InvoiceService,
        public broadcastService: BroadcastService,
        public getTokenDataService: GetTokenDataService,
        public dialog: MatDialog) {
        super(router, activatedRoute, apiService, broadcastService, getTokenDataService);

        this.baseUrl = 'invoices';
    }

    public ngOnInit(): void {
        this.isLoading = true
        this.loadInvoices();
    }


    // LOAD INVOICES
    public loadInvoices(event?): void {
        const query = this.activatedRoute.snapshot.queryParams;
        const filter = new InvoiceFilter({
            pagination: {
                ordering: '-invoice_date',
            },

            card_id: query.card_id,
            is_income: query.is_income,
            start_date: query.start_date,
            end_date: query.end_date,
            status: true
        });
        this.apiService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Invoice[]>) => {
                this.invoices.data = response.results
                this.invoices.sort = this.sort
                this.invoices.paginator = this.paginator;
                this.isLoading = false
            });
    }


    public back(): void {
        this.router.navigateByUrl(this.baseUrl);
    }
    public deleteInvoice(model: any): void {
        // TODO :: Traduzir as mensagens
        const title = 'Delete?';
        const text = 'Are you sure that you want proceed?';
        const confirmButtonText = 'Yes, delete it!';
        const cancelButtonText = 'No, keep it!';

        const confirmationTitle = 'Deleted!';
        const confirmationText = 'Your item has been deleted';

        const cancelTitle = 'Canceled';
        const cancelText = 'Your item was not deleted';

        Swal.fire({
            title: title,
            text: text,
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result: any) => {
            if (result.value) {
                this.apiService
                    .delete(model.uuid)
                    .subscribe((response: any) => {
                        this.loadInvoices()
                        Swal.fire({
                            title: confirmationTitle,
                            text: confirmationText
                        });
                    });
            } else {
                Swal.fire({
                    title: cancelTitle,
                    text: cancelText
                });
            }
        });
    }

    // FOR EDIT DIALOG
    public openEditDialog(data: Invoice) {
        const query = this.activatedRoute.snapshot.queryParams;
        this.dialog.open(InvoiceDetailsComponent, {
            width: '10000px',
            data: data,

        })}
}
