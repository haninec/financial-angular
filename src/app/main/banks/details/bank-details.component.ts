import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FormGroup } from '@angular/forms';
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

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BankService,
        public dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'banks';
    }

    public createFormGroup(): FormGroup {
        return new Bank().toFormGroup();
    }
}
