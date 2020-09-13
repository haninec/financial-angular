import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Bank } from 'app/shared/models/bank.models';
import { BankService } from 'app/shared/services/bank.service';


@Component({
    selector: 'app-bank-details',
    templateUrl: './bank-details.component.html',
    styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent extends BaseDetailsComponent<Bank> implements OnInit, OnDestroy {

    // public institution: Institution[] = [];

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BankService,
        // public institutionService: InstitutionsService,
        public dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'banks';
    }

    // public ngOnInit(): void {
    //     super.ngOnInit();

    //     this.loadInstitutions();
    // }

    // public loadInstitutions(): void {
    //     const filter = new InstitutionsFilter({
    //         pagination: {
    //           sortBy: 'name',
    //           sortDirection: 'asc'
    //         }
    //       });

    //     this.institutionService
    //     .get(filter.toQueryString())
    //     .subscribe((response: any) => {
    //         // this.institutions = response.data;
    //         this.institutions = response;
    //     });
    // }

    public createFormGroup(): FormGroup {
        return new Bank().toFormGroup();
    }
}
