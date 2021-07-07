import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // this component won't get loaded because this.authService.getUser() will return 401 (as mentioned in fakebacked)

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getUser()
      .subscribe(res => {
        console.log(res);
      });
  }

}
