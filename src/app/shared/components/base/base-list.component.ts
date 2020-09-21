import { OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { BaseComponent } from './base.component';

import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { BaseFilter } from 'app/shared/filters/base.filter';
import { BaseService } from 'app/shared/services/base.service';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { Pagination } from 'app/shared/models/pagination.model';
import { GetTokenDataService } from 'app/shared/services/user.service';
import { Login } from 'app/shared/models/login.model';

export abstract class BaseListComponent<TModel> extends BaseComponent implements OnInit, OnDestroy {

    public rows
    public columns: TableColumn[] = [];
    public filter: BaseFilter;
    public user: Login;
    
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BaseService<TModel>,
        public broadcastService: BroadcastService,
        public getTokenDataService: GetTokenDataService,
        public dialog?: MatDialog) {
        super(router, activatedRoute, dialog);
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.user = this.getTokenDataService.getUser();
        this.load();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public load(): void {
        super.load();
        
        this.loadQueryString();
        // Limpando os registros
        this.rows = [];
        this.apiService
            .get(this.queryString)
            .subscribe((response: any) => {
                this.rows = this.apiService.mapList(response.results);
                const pagination = response.page;
                this.filter.pagination = new Pagination(pagination);
                this.afterLoad();
            });
    }

    public afterLoad(): void {
        super.afterLoad();

        this.cleanQueryString();
    }

    
    public changeSort(sort: Sort): void {
        this.filter.pagination.ordering = sort.active;
        this.filter.pagination.sortDirection = sort.direction;
        this.load();
    }

    public changePage(page: PageEvent): void {
        this.filter.pagination.pageSize = page.pageSize;
        this.filter.pagination.page = page.pageIndex + 1;
        this.load();
    }

    public cleanQueryString(): void {
        this.queryString = '';
    }

    public loadQueryString(): void {
        const qsFilter = this.filter.toQueryString();
        if (qsFilter) {
            this.queryString += `${qsFilter}`;
        }
    }

    public active(model: TModel): void {
        this.apiService
            .active(model)
            .subscribe((response: BaseResponse<TModel>) => {
                console.log(response);
            }, (error) => {
                this.load();
            });
    }

    public create(): void {
        this.router.navigate([`${this.baseUrl}/create`]);
    }

    public edit(model: any): void {
        // this.router.navigate([`${this.baseUrl}/details`, model.id]);
        this.router.navigate([`${this.baseUrl}/details`, model.uuid]);
    }

    public delete(model: any): void {
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
                    // .delete(model.id)
                    .delete(model.uuid)
                    .subscribe((response: any) => {
                        this.load();

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
}
