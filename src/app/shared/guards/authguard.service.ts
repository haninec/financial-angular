// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { TokenInterceptor } from '../interceptors/token.interceptor';


@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    constructor(public tokenInterceptor: TokenInterceptor, public router: Router) { }
    
    canActivate(): boolean {
        if (!this.tokenInterceptor.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }


}