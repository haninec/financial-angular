import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { SharedModule } from 'app/shared/shared.module';
import { CompanyRoutes } from './companies.routes';
import { CompanyListComponent } from './list/company-list.component';
import { CompanyService } from 'app/shared/services/company.service';
import { CompanyDetailsComponent } from './details/company-details.component';
import { TypeService } from 'app/shared/services/type.service';






@NgModule({
    declarations: [
        CompanyListComponent,
        CompanyDetailsComponent
    ],
    imports: [
        RouterModule.forChild(CompanyRoutes),
        TranslateModule,
        FuseSharedModule,
        SharedModule
    ],
    exports: [
        CompanyListComponent,
        CompanyDetailsComponent
    ],
    providers: [
        CompanyService,
        TypeService
    ]
})

export class CompaniesModule {
}
