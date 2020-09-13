import { Component, OnInit, OnDestroy } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { Bank } from 'app/shared/models/bank.models';
import { BankService } from 'app/shared/services/bank.service';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { BankFilter } from 'app/shared/filters/bank.filter';


@Component({
    selector: 'app-bank-list',
    templateUrl: './bank-list.component.html',
    styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent extends BaseListComponent<Bank> implements OnInit, OnDestroy {

    public filter: BankFilter = new BankFilter({ hasPagination: true });

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BankService,
        public broadcastService: BroadcastService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, broadcastService);

        this.baseUrl = 'banks';
        

        this.columns.push(new TableColumn({
            translate: 'Bank Initials',
            definition: 'bank_initials',
            displayOrder: 1,
            displayFn: (column: Bank) => column.bank_initials
        }));


        this.columns.push(new TableColumn({
            translate: 'Bank Name',
            definition: 'bank_name',
            displayOrder: 2,
            displayFn: (column: Bank) => column.bank_name
        }));

    }
}
