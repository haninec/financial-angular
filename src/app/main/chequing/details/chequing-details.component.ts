import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Bank } from 'app/shared/models/bank.models';

import { ChequingService } from 'app/shared/services/chequing.service';
import { Chequing } from 'app/shared/models/chequing.models';
import { BankService } from 'app/shared/services/bank.service';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { BankFilter } from 'app/shared/filters/bank.filter';
import { BaseModel } from 'app/shared/models/base.model';
import { HolderFilter } from 'app/shared/filters/holder.filter';
import { Holder } from 'app/shared/models/holder.model';
import { HolderService } from 'app/shared/services/holder.service';


@Component({
    selector: 'app-chequing-details',
    templateUrl: './chequing-details.component.html',
    styleUrls: ['./chequing-details.component.scss']
})
export class ChequingDetailsComponent extends BaseDetailsComponent<Chequing> implements OnInit, OnDestroy {
    public banks: Bank[]
    public holders: Holder[]




    public chequing: Chequing[] = []
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: ChequingService,
        public bankService: BankService,
        public holderService: HolderService,
        public dialog: MatDialog) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'chequing';
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.loadBank();
        this.loadholder();
    }


    // LOAD BANKS
    public loadBank(): void {
        const filter = new BankFilter({
            pagination: {
                ordering: 'bank_name',
            },
            status: true
        });

        this.bankService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Bank[]>) => {
                this.banks = response.results;
            });

    }
    // END LOAD BANKS

    // LOAD HOLDERS
    public loadholder(): void {
        const filter = new HolderFilter({
            pagination: {
                ordering: 'holder_name',
            },
            status: true
        });

        this.holderService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Holder[]>) => {
                this.holders = response.results;
            });

    }
    // END LOAD HOLDERS

    public createFormGroup(): FormGroup {
        return new Chequing().toFormGroup();
    }


}
