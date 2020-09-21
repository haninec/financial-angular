import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from './base.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from 'app/shared/services/base.service';
import { BaseResponse } from 'app/shared/models/base-response.model';

export abstract class BaseDetailsComponent<TModel> extends BaseComponent implements OnInit, OnDestroy {
    
    public id: number;
    public uuid: string;
    public model: TModel;
    public form: FormGroup;
    public isEditMode = false;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BaseService<TModel>,
        public dialog?: MatDialog) {
        super(router, activatedRoute, dialog);
    }

    public abstract createFormGroup(): FormGroup;

    public ngOnInit(): void {
        super.ngOnInit();
        this.getParams();
        this.form = this.createFormGroup();

        this.load();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public getParams(): void {
        
        // this.id = (this.activatedRoute.snapshot.params['id']);
        // this.isEditMode = this.id != null;
        this.uuid = (this.activatedRoute.snapshot.params['uuid']);
        this.isEditMode = this.uuid != null;
    }

    public load(): void {
        super.load();
        
        if (this.isEditMode) {
            
            this.apiService
                // .getById(this.id)
                .getByUuid(this.uuid)
                .subscribe((item: BaseResponse<TModel>) => {
                    this.model = this.apiService.map(item);
                    this.form.patchValue(this.model);
                }, (err) => {
                }, () => {
                    this.afterLoad();
                });
        } else {
            this.afterLoad();
        }
    }

    public submit(): void {
        this.model = this.form.value;

        this.isLoading = true;
        this.apiService
            // .saveById(this.model)
            .saveByUuid(this.model)
            .subscribe((response: BaseResponse<TModel>) => {
                this.isLoading = false;
                this.back();
            }, () => {
                this.isLoading = false;
            });
    }

    public edit(): void {
        // this.router.navigate([`${this.baseUrl}/details`, this.id]);
        this.router.navigate([`${this.baseUrl}/details`, this.uuid]);
    }

    public back(): void {
        this.router.navigateByUrl(this.baseUrl);
    }
}
