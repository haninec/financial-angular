import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Company } from '../models/company.models';


@Injectable()
export class CompanyService extends BaseService<Company> {

    serviceName = 'companies/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
