import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from 'app/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { ChequingRoutes } from './chequing.routes';
import { ChequingListComponent } from './list/chequing-list.component';
import { ChequingService } from 'app/shared/services/chequing.service';
import { ChequingDetailsComponent } from './details/chequing-details.component';
import { Bank } from 'app/shared/models/bank.models';
import { BankService } from 'app/shared/services/bank.service';
import { HolderService } from 'app/shared/services/holder.service';






@NgModule({
    declarations: [
        ChequingDetailsComponent,
        ChequingListComponent
    ],
    imports: [
        RouterModule.forChild(ChequingRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        
        MaterialModule,
        SharedModule
    ],
    exports: [
        ChequingDetailsComponent,
        ChequingListComponent
    ],
    providers: [
        ChequingService,
        BankService,
        HolderService 
    ]
})

export class ChequingModule {
}
