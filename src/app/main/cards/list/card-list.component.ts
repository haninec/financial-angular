import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { Card } from 'app/shared/models/card.model';
import { CardFilter } from 'app/shared/filters/card.filter';
import { CardService } from 'app/shared/services/card.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { BaseResponse } from 'app/shared/models/base-response.model';


@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent extends BaseListComponent<Card> implements OnInit, OnDestroy {
    
    public filter: CardFilter = new CardFilter({ hasPagination: true });
    public rows: MatTableDataSource<Card> = new MatTableDataSource([]);
    public data: any[] = [];
    displayedColumns: string[] = [
        'bank_initials',
        'card_number',
        'is_credit_card',
        'card_limit',
        'holder_name',
        'actions'

    ];
    @ViewChild(MatSort, { static: true }) sort: MatSort
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: CardService,
        public broadcastService: BroadcastService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, broadcastService);

        this.baseUrl = 'cards';  
    }


    public ngOnInit(): void {
        this.isLoading = true
        this.loadCards();
    }

    // LOAD CARDS
    public loadCards(): void {
        const filter = new CardFilter({
            status: true
        });
        
        this.apiService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Card[]>) => {
                this.rows.data = response.results
                this.data = response.results
                this.rows.sort = this.sort
                this.rows.paginator = this.paginator;
                this.isLoading = false
            });

    }

}
