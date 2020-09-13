import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/base/base-list.component';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { TableColumn } from 'app/shared/models/table-column.model';
import { CompanyFilter } from 'app/shared/filters/company.filter';
import { Company } from 'app/shared/models/company.models';
import { CompanyService } from 'app/shared/services/company.service';


@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent extends BaseListComponent<Company> implements OnInit, OnDestroy {

    public filter: CompanyFilter = new CompanyFilter({ hasPagination: true });

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: CompanyService,
        public broadcastService: BroadcastService) {
        super(router, activatedRoute, apiService, broadcastService);

        this.baseUrl = 'companies';
        

        this.columns.push(new TableColumn({
            translate: 'Company',
            definition: 'company',
            displayOrder: 1,
            displayFn: (column: Company) => column.company
        }));

        this.columns.push(new TableColumn({
            translate: 'Type',
            definition: 'type',
            displayOrder: 2,
            displayFn: (column: Company) => column.type.type
        }));

    }
}
