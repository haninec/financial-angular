import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Invoice } from '../models/invoice.models';



@Injectable()
export class InvoiceService extends BaseService<Invoice> {

    serviceName = 'invoices/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
