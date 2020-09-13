import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { InvoiceValueService } from 'app/shared/services/invoices-values.service';
import { SharedModule } from 'app/shared/shared.module';
import { Sample } from './dashboard/sample.component';

const routes = [
    {
        path     : 'sample21312312313123124341213',
        component: Sample
    }
];



@NgModule({
    declarations: [
        Sample
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        SharedModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule
    ],
    exports: [
        Sample
    ],
    providers   : [
        
        
    ]
})
export class SampleModule
{
}

