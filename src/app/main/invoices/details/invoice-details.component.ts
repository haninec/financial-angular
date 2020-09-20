import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Invoice } from 'app/shared/models/invoice.models';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { CardService } from 'app/shared/services/card.service';
import { Card } from 'app/shared/models/card.model';
import { CardFilter } from 'app/shared/filters/card.filter';
import { Company } from 'app/shared/models/company.models';
import { CompanyService } from 'app/shared/services/company.service';
import { CompanyFilter } from 'app/shared/filters/company.filter';
import { InvoiceFilter } from 'app/shared/filters/invoice.filter';




@Component({
    selector: 'app-invoice-details',
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent extends BaseDetailsComponent<Invoice> implements OnInit, OnDestroy {
    public cards: Card[] = [];
    public companies: Company[] = [];
    public filter: InvoiceFilter = new InvoiceFilter({ hasPagination: true });
    

    public is_incomes: any[] = [
        { is_income: true, value: 'Income' },
        { is_income: false, value: 'Outcome' },
    ];


    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: InvoiceService,
        public cardService: CardService,
        public companyService: CompanyService,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data?: any) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'invoices';
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.load();
        this.loadCards();
        this.loadCompanies();
    }

    // LOAD CARDS
    public loadCards(): void {
        const filter = new CardFilter({
            pagination: {
            },
            status: true
        });

        this.cardService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Card[]>) => {
                this.cards = response.results;
            });

    }
    // END LOAD CARDS

    // LOAD COMPANIES
    public loadCompanies(): void {
        const filter = new CompanyFilter({
            pagination: {
                ordering: 'company'
            },
            status: true
        });
        this.companyService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Company[]>) => {
                this.companies = response.results;
            });
    }
    // END LOAD COMPANIES


    public createFormGroup(): FormGroup {
        return new Invoice().toFormGroup();
    }

    public closeDialog(): void {
        this.dialog.closeAll();
    }

    public load(): void {
        if (this.data.uuid != undefined) {
            this.isEditMode = true;
            this.apiService
                .getByUuid(this.data.uuid)
                .subscribe((item: BaseResponse<any>) => {
                    this.model = this.apiService.map(item);
                    this.form.patchValue(this.model);
                    this.afterLoad();
                });
        }
        else {
            this.afterLoad();
        }
    }

    public saveChanges(): void {
        this.model = this.form.value;

        this.isLoading = true;
        this.apiService
            // .saveById(this.model)
            .saveByUuid(this.model)
            .subscribe((response: BaseResponse<Invoice>) => {
                this.isLoading = false;
                this.dialog.closeAll();
            });
    }


}
