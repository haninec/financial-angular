import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from './base.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from 'app/shared/services/base.service';
import { environment } from 'environments/environment';
import { AlertService } from 'app/shared/services/alert.service';

export abstract class BaseAuthenticationComponent<TModel> extends BaseComponent implements OnInit, OnDestroy {
    
    public id: number;
    public model: TModel;
    public form: FormGroup;
    public isEditMode = false;
    private token: any

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BaseService<TModel>,
        public dialog?: MatDialog,
        public alertService?: AlertService,) {
        super(router, activatedRoute, dialog);
    }

    public abstract createFormGroup(): FormGroup;

    public ngOnInit(): void {
        super.ngOnInit();
        this.form = this.createFormGroup();

        this.load();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }


    public submit(): void {
        this.model = this.form.value;
        this.isLoading = true;
        this.apiService
            .post(this.model)
          
            .subscribe(
                (token: any) => {
                    this.token = token.token;
                    localStorage.setItem(environment.tokenAuthStorage, this.token);
                    this.back();
                }
            );
            this.isLoading = false;            
                
    }

    public register(): void {
        this.model = this.form.value;
        this.isLoading = true;
        this.apiService
            .post(this.model)
            .subscribe(
                () => { 
                    this.router.navigateByUrl("/login")
                }
            );
              
    }


    public back(): void {
        this.router.navigateByUrl('/dashboard')

    }
}
