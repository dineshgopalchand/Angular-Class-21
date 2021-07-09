import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { JSONFormat } from '../../_help/jsonformat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  get environmentName(): string {
    return environment.name as string;
  }
  get userName(): string {
    return (this.authenticationService.currentUserValue as JSONFormat).firstName as string;
  }
  get isLogin(): boolean {
    return (this.authenticationService.currentUserValue as JSONFormat).token ? true : false;
  }
  logoutuser(): void {
    this.authenticationService.logout();
  }

}
