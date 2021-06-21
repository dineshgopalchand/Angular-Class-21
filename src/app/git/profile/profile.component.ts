import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JSONFormat } from 'src/app/shared/_help/jsonformat';
import { GitDetailsService } from '../services/git-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName = '';
  userDetails: JSONFormat = {};
  constructor(private activedRoute: ActivatedRoute, private gitService: GitDetailsService) { }

  ngOnInit(): void {
    //  activedRoute.paramMap or activedRoute.params will help us to get params data of url from same route
    this.activedRoute.paramMap
      .subscribe(params => {
      });

    //  activedRoute.paramMap or activedRoute.params will help us to get params data for url from parent route
    // this.activedRoute.parent?.paramMap.subscribe(params => {
    //   console.log(params);
    //   this.userName = params.get('username') as string;
    //   this.gitService.getProfile(this.userName)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.userDetails = data as JSONFormat;
    //     });
    // });
    this.activedRoute.parent?.paramMap
      .pipe(switchMap(params => {
        console.log(params);
        this.userName = params.get('username') as string;
        return this.gitService.getProfile(this.userName);
      }
      )).subscribe(data => {
        console.log(data);
        this.userDetails = data as JSONFormat;
      });
  }

}


// avatar_url: "https://avatars.githubusercontent.com/u/8764623?v=4"
// bio: "Working as a web developer and digital Marketing expert."
// blog: ""
// company: "Nilam Software Solution"
// created_at: "2014-09-14T02:12:03Z"
// email: null
// events_url: "https://api.github.com/users/dineshgopalchand/events{/privacy}"
// followers: 11
// followers_url: "https://api.github.com/users/dineshgopalchand/followers"
// following: 6
// following_url: "https://api.github.com/users/dineshgopalchand/following{/other_user}"
// gists_url: "https://api.github.com/users/dineshgopalchand/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/dineshgopalchand"
// id: 8764623
// location: "Bangalore"
// login: "dineshgopalchand"
// name: "Dinesh Gopal Chand"
// node_id: "MDQ6VXNlcjg3NjQ2MjM="
// organizations_url: "https://api.github.com/users/dineshgopalchand/orgs"
// public_gists: 0
// public_repos: 48
// received_events_url: "https://api.github.com/users/dineshgopalchand/received_events"
// repos_url: "https://api.github.com/users/dineshgopalchand/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/dineshgopalchand/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/dineshgopalchand/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-05-31T02:22:20Z"
// url: "https://api.github.com/users/dineshgopalchand"
