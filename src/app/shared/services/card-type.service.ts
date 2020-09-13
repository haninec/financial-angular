import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CardType } from '../models/card-type.model';


@Injectable()
export class CardTypeService extends BaseService<CardType> {

    serviceName = 'debitCredit/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
