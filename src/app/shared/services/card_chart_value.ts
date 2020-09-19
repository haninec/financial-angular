import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class CardChartValuesService extends BaseService<any> {

    serviceName = 'card_chart_values/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
