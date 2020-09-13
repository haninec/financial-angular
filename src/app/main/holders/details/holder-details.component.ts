import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Holder } from 'app/shared/models/holder.model';
import { HolderService } from 'app/shared/services/holder.service';


@Component({
    selector: 'app-holder-details',
    templateUrl: './holder-details.component.html',
    styleUrls: ['./holder-details.component.scss']
})
export class HolderDetailsComponent extends BaseDetailsComponent<Holder> implements OnInit, OnDestroy {


    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: HolderService,
        public dialog: MatDialog) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'holders';
    }

    public createFormGroup(): FormGroup {
        return new Holder().toFormGroup();
    }
}
