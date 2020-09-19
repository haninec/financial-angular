import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { ChequingFilter } from 'app/shared/filters/chequing.filter';
import { Chequing } from 'app/shared/models/chequing.models';
import { ChequingService } from 'app/shared/services/chequing.service';


@Component({
    selector: 'app-chequing-list',
    templateUrl: './chequing-list.component.html',
    styleUrls: ['./chequing-list.component.scss']
})
export class ChequingListComponent extends BaseListComponent<Chequing> implements OnInit, OnDestroy {

    public filter: ChequingFilter = new ChequingFilter({ hasPagination: true });

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: ChequingService,
        public broadcastService: BroadcastService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, broadcastService);

        this.baseUrl = 'chequing';
        
            
        this.columns.push(new TableColumn({
            translate: 'Chequing Number',
            definition: 'account_number',
            displayOrder: 1,
            displayFn: (column: Chequing) => column.account_number
        }));

        this.columns.push(new TableColumn({
            translate: 'Holder',
            definition: 'holder_first_name',
            displayOrder: 2,
            displayFn: (column: Chequing) => column.holder.holder_name
        }));

        
        this.columns.push(new TableColumn({
            translate: 'Bank Initials',
            definition: 'bank_name',
            displayOrder: 3,
            displayFn: (column: Chequing) => column.bank.bank_initials
        }));

        

    }
}
