import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { InOut } from '../models/in-out.models';




@Injectable()
export class InOutService extends BaseService<InOut> {

    serviceName = 'inOut/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
