import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitDetailsService } from '../services/git-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName = '';
  constructor(private activedRoute: ActivatedRoute, private gitService: GitDetailsService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap
      .subscribe(params => {
        console.log(params);
        this.userName = params.get('username') as string;
        this.gitService.getProfile(this.userName)
          .subscribe(data => {
            console.log(data);
          });
      });
  }

}
