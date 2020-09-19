import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ChartsModule } from 'ng2-charts';
import { InvoiceValueService } from 'app/shared/services/invoices-values.service';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardRoutes } from './dashboard.routes';
import { ProjectDashboardComponent } from './dashboard-main/dashboard-main.component';
import { CardService } from 'app/shared/services/card.service';
import { CardChartValuesService } from 'app/shared/services/card_chart_value';




@NgModule({
    declarations: [
        ProjectDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(DashboardRoutes),
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
        CardChartValuesService,
        
    ]
})
export class DashboardModule
{
}

