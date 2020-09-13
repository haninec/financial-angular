import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'app/material.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoadingButtonComponent } from './loading-button/loading-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FuseSharedModule,
        MaterialModule
    ],
    declarations: [
        LoadingButtonComponent
    ],
    exports: [
        LoadingButtonComponent
    ]
})
export class ButtonsModule {
}
