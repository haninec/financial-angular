import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import { InvoiceValue } from '../models/invoice-value.model';



@Injectable()
export class InvoiceValueService extends BaseService<InvoiceValue> {

    serviceName = 'invoicesThisLast/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
