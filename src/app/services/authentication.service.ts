import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(http: HttpClient) {
    super(http, environment.API.signin);
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
    return this.fetchData(environment.API.user);
  }
  // signout(){}
}

export interface SignInBody {
  username: string;
  password: string;
}
