import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'app/material.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SelectorComponent } from './selector/selector.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FuseSharedModule,
        MaterialModule
    ],
    declarations: [
        AutoCompleteComponent,
        SelectorComponent
    ],
    exports: [
        AutoCompleteComponent,
        SelectorComponent
    ]
})
export class FormModule {
}
