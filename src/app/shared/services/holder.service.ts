import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Holder } from '../models/holder.model';



@Injectable()
export class HolderService extends BaseService<Holder> {

    serviceName = 'holders/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
