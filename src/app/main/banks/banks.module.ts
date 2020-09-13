import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { BanksRoutes } from './banks.routes';
import { MaterialModule } from 'app/material.module';
import { BankListComponent } from './list/bank-list.component';
import { BankService } from 'app/shared/services/bank.service';
import { SharedModule } from 'app/shared/shared.module';
import { BankDetailsComponent } from './details/bank-details.component';
import { MatTableModule } from '@angular/material/table';





@NgModule({
    declarations: [
        BankDetailsComponent,
        BankListComponent
    ],
    imports: [
        RouterModule.forChild(BanksRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        
        MaterialModule,
        SharedModule
    ],
    exports: [
        BankDetailsComponent,
        BankListComponent
    ],
    providers: [
        BankService
    ]
})

export class BanksModule {
}
