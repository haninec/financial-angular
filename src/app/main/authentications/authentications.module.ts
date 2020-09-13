import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from 'app/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
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
        MatTableModule,
        
        MaterialModule,
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


