import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { JSONFormat } from 'src/app/shared/_help/jsonformat';
import { GitDetailsService } from '../services/git-details.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {

  userName = '';
  followerList: JSONFormat[] = [];
  constructor(private route: ActivatedRoute, private gitService: GitDetailsService) { }

  ngOnInit(): void {

    //  ActivatedRoute.paramMap or ActivatedRoute.params will help us to get params data of url from same route
    this.route.paramMap
      .subscribe(params => {
      });

    //  ActivatedRoute.paramMap or ActivatedRoute.params will help us to get params data for url from parent route
    this.route.parent?.paramMap
      .pipe(switchMap(params => {
        console.log(params);
        this.userName = params.get('username') as string;
        return this.gitService.getFollowers(this.userName);
      }
      )).subscribe(data => {
        console.log(data);
        this.followerList = data as JSONFormat[];
      });



    // ActivatedRoute.queryParamMap && ActivatedRoute.queryParams to fetch query params info from url (?p=1&n=2)
    // this.route.queryParamMap
    //   .subscribe(qparams => {
    //     console.log(qparams);
    //   });
    this.route.queryParams
      .subscribe(qparams => {
        console.log(qparams);
      });
  }

}
