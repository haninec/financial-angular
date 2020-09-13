import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from 'app/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { CardService } from 'app/shared/services/card.service';
import { CardListComponent } from './list/card-list.component';
import { CardsRoutes } from './cards.routes';
import { CardDetailsComponent } from './details/card-details.component';
import { CardTypeService } from 'app/shared/services/card-type.service';
import { ChequingService } from 'app/shared/services/chequing.service';






@NgModule({
    declarations: [
        CardDetailsComponent,
        CardListComponent
    ],
    imports: [
        RouterModule.forChild(CardsRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        CardDetailsComponent,
        CardListComponent
    ],
    providers: [
        CardService,
        CardTypeService,
        ChequingService
         
    ]
})

export class CardsModule {
}
