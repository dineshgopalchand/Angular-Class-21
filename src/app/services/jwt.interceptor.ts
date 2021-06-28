import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) { }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     throw new Error('Method not implemented.');
    // }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = JSON.parse(localStorage.getItem('userinfo') as string) || {};
        this.authenticationService.currentUserValue = currentUser;
        const isLoggedIn = (currentUser && currentUser.token) ? true : false;
        const isApiUrl = request.url.startsWith(environment.API.todolink);
        console.log({ isApiUrl, isLoggedIn, currentUser });
        if (isApiUrl) {
            if (isLoggedIn) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            } else {
                this.router.navigate(['./', 'user'], {
                    queryParams: {
                        r: request.url
                    }
                });
            }
        }

        return next.handle(request);
    }
}
