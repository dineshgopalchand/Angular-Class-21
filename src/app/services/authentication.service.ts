import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JSONFormat } from '../shared/_help/jsonformat';
import { DataService } from '../shared/_helper/data-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends DataService {
  currentUserValue: JSONFormat = {};

  constructor(http: HttpClient, private route: Router) {
    super(http, environment.API.signin);
  }

  get currentUser(): JSONFormat {
    const currentUserDetails = JSON.parse(localStorage.getItem('userinfo') as string) || {};
    this.currentUserValue = currentUserDetails;
    return currentUserDetails;

  }

  get isLoggedIn(): boolean {
    return (this.currentUserValue && this.currentUserValue.token) ? true : false;
  }

  signin(body: SignInBody): Observable<any> {
    console.log(body);
    return this.create(body)
      .pipe(map(data => {
        console.log({ data });
        localStorage.setItem('userinfo', JSON.stringify(data));
        this.currentUserValue = data;
        return data;
      }));
  }
  getUser(): Observable<any> {
    return this.fetchData(environment.API.user) as  Observable<any>;
  }
  logout(): void {
    localStorage.removeItem('userinfo');
    this.currentUserValue = {};
    this.route.navigate(['./', 'user']);
  }
}

export interface SignInBody {
  username: string;
  password: string;
}
