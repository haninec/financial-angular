import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { Company } from 'app/shared/models/company.models';
import { CompanyService } from 'app/shared/services/company.service';
import { TypeService } from 'app/shared/services/type.service';
import { Type } from 'app/shared/models/type.models';
import { TypeFilter } from 'app/shared/filters/type.filter';


@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent extends BaseDetailsComponent<Company> implements OnInit, OnDestroy {
    public companies: Company[]
    public types: Type[]


    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: CompanyService,
        public typeService: TypeService,
        public dialog: MatDialog) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'companies';
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.loadType();
    }

    // LOAD TYPE
    public loadType(): void {
        const filter = new TypeFilter({
            pagination: {
                ordering: 'type',
            },
            status: true
        });
        this.typeService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Type[]>) => {
                this.types = response.results;     
            });
        
    }

    // END LOAD TYPES
    public createFormGroup(): FormGroup {
        return new Company().toFormGroup();
    }


}
