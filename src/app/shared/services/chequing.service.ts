import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Holder } from '../models/holder.model';
import { Chequing } from '../models/chequing.models';



@Injectable()
export class ChequingService extends BaseService<Chequing> {

    serviceName = 'chequings/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
