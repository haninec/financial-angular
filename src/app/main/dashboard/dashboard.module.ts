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
import { ChartsModule } from 'ng2-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { InvoiceValueService } from 'app/shared/services/invoices-values.service';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardRoutes } from './dashboard.routes';
import { ProjectDashboardComponent } from './dashboard-main/dashboard-main.component';
import { CardService } from 'app/shared/services/card.service';
import { ChartService } from 'app/shared/services/chart.service';
import { MaterialModule } from 'app/material.module';




@NgModule({
    declarations: [
        ProjectDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(DashboardRoutes),
        MaterialModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        ChartsModule,
        NgxChartsModule,
        SharedModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule
    ],
    exports: [
        ProjectDashboardComponent
    ],
    providers   : [
        InvoiceValueService,
        CardService,
        ChartService
        
    ]
})
export class DashboardModule
{
}

