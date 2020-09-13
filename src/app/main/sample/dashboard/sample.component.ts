import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import * as shape from 'd3-shape';

import { fuseAnimations } from '@fuse/animations';


import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { InvoiceValueService } from 'app/shared/services/invoices-values.service';
import { filter } from 'lodash';
import { InvoiceValue } from 'app/shared/models/invoice-value.model';
import { InvoiceValueFilter } from 'app/shared/filters/invoice-value.filter';


@Component({
    selector     : 'project-dashboard',
    templateUrl  : './sample.component.html',
    styleUrls    : ['./sample.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Sample implements OnInit
{
    public filter: InvoiceValueFilter = new InvoiceValueFilter({ hasPagination: true });
    selectedOption: string;
    projects: any[];
    invoiceValue: InvoiceValue[]=[]
    selectedProject: any;

    widgets: any;
    dateNow = Date.now();

    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
   
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        public invoiceValueService: InvoiceValueService
    )
    {
        

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {


        
        this.selectedOption = 'a';
        
     

    }






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





    //     list1 = [{ id: '1', beschrijving: 'a' }, { id: '2', beschrijving: 'b' }];
    //     list2 = [{ id: '1', beschrijving: 'aaa' }, { id: '2', beschrijving: 'bbbb' }];
    //     filteredGebied;
    //     filteredDomein;
  
    //     onChange(event) {
    //     if (this.filteredGebied === '1') {
    //       this.list2 = [{ id: '1', beschrijving: 'xxx' }, { id: '2', beschrijving: 'yyyy' }];
    //     }
    //    }
     
}

export class FilesDataSource{}

