import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'app/shared/models/pagination.model';
import { TableColumn } from 'app/shared/models/table-column.model';
import { Sort } from '@angular/material/sort';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as brPortuguese } from '../i18n/pt';

@Component({
    selector: 'app-default-table',
    templateUrl: 'default-table.component.html',
    styleUrls: ['default-table.component.scss']
})
export class DefaultTableComponent {

    public displayedColumns: string[] = [];

    public columnsOrdered: TableColumn[] = [];
    get columns(): TableColumn[] {
        return this.columnsOrdered;
    }

    @Input('columns')
    set columns(cols: TableColumn[]) {
        this.columnsOrdered = cols.sort((tc1: TableColumn, tc2: TableColumn) => {
            if (tc1.displayOrder > tc2.displayOrder) {
                return 1;
            }

            if (tc1.displayOrder < tc2.displayOrder) {
                return -1;
            }

            return 0;
        });

        this.displayedColumns = [];
        this.columnsOrdered.forEach(column => {
            this.displayedColumns.push(column.definition);
        });

        if (this.hasActions) {
            this.displayedColumns.push('actions');
        }
    }

    @Input() rows: any = [];
    @Input() pagination: Pagination;

    @Input() emptyDataInfo: string;
    @Input() isLoading = false;

    @Input() emptyMessage = 'Nenhuma informação a ser listada.';

    @Input() hasActions = true;
    @Input() hasEditButton = true;
    @Input() hasDeleteButton = true;
    @Input() hasPagination = true;

    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();

    public currentPage: number;
    public numberPagesToDisplay: number;

    public pages: number[];
    public allPages: number[];
    public totalPages: number;
    public totalColumns: number;

    @Output() changePage: EventEmitter<any> = new EventEmitter();
    @Output() changeSort: EventEmitter<any> = new EventEmitter();

    constructor(private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        this._fuseTranslationLoaderService.loadTranslations(
            english,
            brPortuguese
        );
    }

    public editClickAction(item: any): void {
        this.edit.emit(item);
    }

    public deleteClickAction(item: any): void {
        this.delete.emit(item);
    }

    public sortData(sortAction: Sort): void {
        this.changeSort.emit(sortAction);
    }

    public goToPage(pageEvent: PageEvent): void {
        this.changePage.emit(pageEvent);
    }
}
