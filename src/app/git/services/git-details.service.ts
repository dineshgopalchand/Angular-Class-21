import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONFormat } from 'src/app/shared/_help/jsonformat';
import { DataService, OptionDetails } from 'src/app/shared/_helper/data-service';

@Injectable({
  providedIn: 'root'
})
export class GitDetailsService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/');
  }
  getProfile(username: string): Observable<any> {
    return this.fetchData(this.url + username);
  }
  getRepo(username: string, option?: OptionDetails): Observable<any> {
    return this.fetchData(this.url + username + '/repos');
  }
  getFollowers(username: string): Observable<any> {
    return this.fetchData(this.url + username + '/followers');
  }
}
