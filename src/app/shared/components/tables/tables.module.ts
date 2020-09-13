import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DefaultTableComponent } from './default-table/default-table.component';
import { MaterialModule } from 'app/material.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NgxDatatableModule,
        TranslateModule
    ],
    declarations: [
        DefaultTableComponent
    ],
    exports: [
        DefaultTableComponent
    ]
})
export class TablesModule {
}
