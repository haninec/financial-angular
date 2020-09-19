import { NgModule } from '@angular/core';
import { StorageService } from './services/storage.service';
import { BroadcastService } from './services/broadcast.service';
import { AlertService } from './services/alert.service';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { TablesModule } from './components/tables/tables.module';
import { ButtonsModule } from './components/buttons/buttons.module';
import { FormModule } from './components/forms/forms.module';
import { MaterialModule } from 'app/material.module';




@NgModule({
    declarations: [
    ],
    exports: [
        ButtonsModule,
        TablesModule,
        InterceptorsModule,
        FormModule,
        MaterialModule
    ],
    providers: [
        AlertService,
        BroadcastService,
        StorageService
    ]
})
export class SharedModule { }
