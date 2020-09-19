import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { SharedModule } from 'app/shared/shared.module';
import { AuthenticationsRoutes } from './authentications.routes';
import { LoginService } from 'app/shared/services/login.service';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';
import { UserService } from 'app/shared/services/user.service';




@NgModule({
    declarations: [
        AuthenticationLoginComponent,
    ],
    imports: [
        RouterModule.forChild(AuthenticationsRoutes),
        TranslateModule,
        FuseSharedModule,
        SharedModule
    ],
    exports: [
        AuthenticationLoginComponent
    ],
    providers: [
        LoginService,
        UserService
    ]
})

export class AuthenticationsModule {
}


