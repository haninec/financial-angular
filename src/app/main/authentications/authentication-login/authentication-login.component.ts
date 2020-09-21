import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { Login } from 'app/shared/models/login.model';
import { LoginService } from 'app/shared/services/login.service';
import { BaseAuthenticationComponent } from 'app/shared/components/base/base-authentication.component';
import { UserService } from 'app/shared/services/user.service';



@Component({
    selector: 'login-2',
    templateUrl: './authentication-login.component.html',
    styleUrls: ['./authentication-login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthenticationLoginComponent extends BaseAuthenticationComponent<Login> implements OnInit, OnDestroy {
    public users: Login[] = []
    public loadingApi = true
    public loading: any

    constructor(
        private _fuseConfigService: FuseConfigService,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: LoginService,
        public userService: UserService,
        public dialog: MatDialog) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'login';
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.loading = setInterval(() => {
            this.startApp()
        }, 5000);
    };

    public ngOnDestroy() {
        if (this.loading) {
            clearInterval(this.loading);
        }
    }

    public startApp(): void {
        this.userService
            .get()
            .subscribe((response: any) => {
                this.users = response.results;
                this.loadingApi = false
                this.ngOnDestroy();
            });

    }

    public createFormGroup(): FormGroup {
        return new Login().toFormGroup();
    }
}
