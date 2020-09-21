import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { TypeService } from 'app/shared/services/type.service';
import { Type } from 'app/shared/models/type.models';
import { TypeFilter } from 'app/shared/filters/type.filter';
import { GetTokenDataService } from 'app/shared/services/user.service';



@Component({
    selector: 'app-type-list',
    templateUrl: './type-list.component.html',
    styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent extends BaseListComponent<Type> implements OnInit, OnDestroy {

    public filter: TypeFilter = new TypeFilter({ hasPagination: true });

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: TypeService,
        public broadcastService: BroadcastService,
        public getTokenDataService: GetTokenDataService,) {
        super(router, activatedRoute, apiService, broadcastService, getTokenDataService);

        this.baseUrl = 'types';
        
        this.columns.push(new TableColumn({
            translate: 'Type',
            definition: 'type',
            displayOrder: 1,
            displayFn: (column: Type) => column.type
        }));

    }
}
