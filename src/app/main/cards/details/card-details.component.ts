import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Card } from 'app/shared/models/card.model';
import { CardService } from 'app/shared/services/card.service';
import { ChequingFilter } from 'app/shared/filters/chequing.filter';
import { Chequing } from 'app/shared/models/chequing.models';
import { ChequingService } from 'app/shared/services/chequing.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent extends BaseDetailsComponent<Card> implements OnInit, OnDestroy {
    public uuid: string;
    public types: any[] = [
        { type: true, value: 'Credit' },
        { type: false, value: 'Debit' },
    ];
    public chequings: Chequing[] = [];
    public balance$: Observable<number>
    public checkEdit: boolean

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: CardService,
        public chequingService: ChequingService,
        public dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'cards';
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.isEdit();
        this.loadChequing();
    }

    public abc(page){
        console.log(page)
    }

    // GET CHEQUING
    public loadChequing(): void {
        const filter = new ChequingFilter({
            status: true
        });
        this.chequingService
            .get(filter.toQueryString())
            .subscribe((response: any) => {
                this.chequings = response.results;
            });
    }

    public isEdit() {
        this.uuid = (this.activatedRoute.snapshot.params['uuid']);
        if (this.uuid) {
            this.checkEdit = true
        }
        else {
            this.checkEdit = false
        }
    }

    public createFormGroup(): FormGroup {
        return new Card().toFormGroup();
    }
}
