import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from 'app/material.module';

import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { InvoicesRoutes } from './invoices.routes';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { InvoiceListComponent } from './list/invoice-list.component';
import { InvoiceDetailsComponent } from './details/invoice-details.component';
import { CardService } from 'app/shared/services/card.service';
import { InvoiceSearchComponent } from './search/invoice-search.component';
import { CompanyService } from 'app/shared/services/company.service';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';





@NgModule({
    declarations: [
        InvoiceDetailsComponent,
        InvoiceListComponent,
        InvoiceSearchComponent
    ],
    imports: [
        RouterModule.forChild(InvoicesRoutes),
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        MatDialogModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        InvoiceDetailsComponent,
        InvoiceListComponent,
        InvoiceSearchComponent
    ],
    providers: [
        InvoiceService,
        CardService,
        CompanyService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
    ]
})

export class InvoicesModule {
}
