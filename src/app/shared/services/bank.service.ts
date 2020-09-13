import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Bank } from '../models/bank.models';


@Injectable()
export class BankService extends BaseService<Bank> {

    serviceName = 'banks/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
