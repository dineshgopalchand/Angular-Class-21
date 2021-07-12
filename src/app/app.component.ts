import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) { }
  title = 'Angular class';
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUser;
  }
}
