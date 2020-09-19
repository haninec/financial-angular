import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule } from '@angular/material/table';

import { MaterialModule } from 'app/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { TypeListComponent } from './list/type-list.component';
import { TypeService } from 'app/shared/services/type.service';
import { TypesRoutes } from './types.routes';
import { TypeDetailsComponent } from './details/type-details.component';


@NgModule({
    declarations: [
        TypeListComponent,
        TypeDetailsComponent
    ],
    imports: [
        RouterModule.forChild(TypesRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        
        MaterialModule,
        SharedModule
    ],
    exports: [
        TypeListComponent,
        TypeDetailsComponent
    ],
    providers: [
        TypeService
    ]
})

export class TypesModule {
}
