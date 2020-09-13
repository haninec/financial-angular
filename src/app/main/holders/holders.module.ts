import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from 'app/material.module';
import { BankService } from 'app/shared/services/bank.service';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HolderListComponent } from './list/holder-list.component';
import { HoldersRoutes } from './holders.routes';
import { HolderService } from 'app/shared/services/holder.service';
import { HolderDetailsComponent } from './details/holder-details.component';




@NgModule({
    declarations: [
        HolderDetailsComponent,
        HolderListComponent
    ],
    imports: [
        RouterModule.forChild(HoldersRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        
        MaterialModule,
        SharedModule
    ],
    exports: [
        HolderDetailsComponent,
        HolderListComponent
    ],
    providers: [
        HolderService
    ]
})

export class HoldersModule {
}
