import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { SharedModule } from 'app/shared/shared.module';
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
