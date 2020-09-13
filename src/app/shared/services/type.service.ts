import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Type } from '../models/type.models';



@Injectable()
export class TypeService extends BaseService<Type> {

    serviceName = 'type/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
