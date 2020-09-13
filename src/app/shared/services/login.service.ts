import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Login } from '../models/login.model';



@Injectable()
export class LoginService extends BaseService<Login> {

    serviceName = 'auth/jwt/';
    
    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
