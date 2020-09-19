import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { InvoiceValueService } from 'app/shared/services/invoices-values.service';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './sample.component.html',
    styleUrls    : ['./sample.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Sample implements OnInit {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
   
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        public invoiceValueService: InvoiceValueService
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void { }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }   
}

export class FilesDataSource{}

