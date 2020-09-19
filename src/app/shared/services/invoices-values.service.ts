import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class InvoiceValueService extends BaseService<any> {

    serviceName = 'invoices_val_past_month/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
