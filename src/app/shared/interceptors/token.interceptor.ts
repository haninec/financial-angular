import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AlertService } from '../services/alert.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

    constructor(public alertService: AlertService) { }
    isAuthenticated(){
        const token = localStorage.getItem(environment.tokenAuthStorage)
        if (token) {
            return true
        }
        this.alertService.error('Log in to continue');
        return false
    }
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        
        let headers = req.headers;
        
        const token = localStorage.getItem(environment.tokenAuthStorage);
        if (token) {
            // headers = headers.set('Authorization', 'JWT '.concat(token));
            // headers = headers.set('Authorization', 'Bearer '.concat(token));
            headers = headers.set('Authorization', `Bearer ${token}`);
        };

        const authReq = req.clone({
            headers: headers
        });

        return next
            .handle(authReq)
            .pipe(
                map((event: HttpEvent<any>) => {
                    return event;
                })
            );

    }

}