import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { Holder } from 'app/shared/models/holder.model';
import { HolderFilter } from 'app/shared/filters/holder.filter';
import { HolderService } from 'app/shared/services/holder.service';


@Component({
    selector: 'app-holder-list',
    templateUrl: './holder-list.component.html',
    styleUrls: ['./holder-list.component.scss']
})
export class HolderListComponent extends BaseListComponent<Holder> implements OnInit, OnDestroy {

    public filter: HolderFilter = new HolderFilter({ hasPagination: true });

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: HolderService,
        public broadcastService: BroadcastService) {
        super(router, activatedRoute, apiService, broadcastService);

        this.baseUrl = 'holders';
        

        this.columns.push(new TableColumn({
            translate: 'Name',
            definition: 'holder_name',
            displayOrder: 1,
            displayFn: (column: Holder) => column.holder_name
        }));

    }
}
