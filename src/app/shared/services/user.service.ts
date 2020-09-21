import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as jwt_decode from 'jwt-decode'
import { BaseService } from './base.service';
import { Login } from '../models/login.model';
import { StorageService } from './storage.service';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';



@Injectable()
export class UserService extends BaseService<Login> {

    serviceName = 'auth/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}


@Injectable({ providedIn: 'root' })
export class GetTokenDataService {
    public user: Login;

    private userSubject = new Subject<Login>();

    constructor(private storageService: StorageService) {
        this.storageService.getItem(environment.tokenAuthStorage) &&
        this.decodeAndNotify();
     }


    getUser() {
        return this.user;
    }

    private decodeAndNotify() {
        const token = this.storageService.getItem(environment.tokenAuthStorage);
        this.user = jwt_decode(token);
        return this.user;
    }
}
