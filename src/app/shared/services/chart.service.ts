import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';




@Injectable()
export class ChartService extends BaseService<any> {

    serviceName = 'chart/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
