import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JSONFormat } from 'src/app/shared/_help/jsonformat';
import { OptionDetails } from 'src/app/shared/_helper/data-service';
import { GitDetailsService } from '../services/git-details.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  userName = '';
  repoList: JSONFormat[] = [];
  p: any = 1;
  noPerPage: any = 5;
  constructor(
    private route: ActivatedRoute,
    private gitService: GitDetailsService,
    private router: Router) { }

  ngOnInit(): void {

    //  route.paramMap or route.params will help us to get params data of url from same route
    this.route.paramMap
      .subscribe(params => {
      });

    //  route.paramMap or route.params will help us to get params data for url from parent route
    this.route.parent?.paramMap
      .pipe(switchMap(params => {
        console.log(params);
        this.userName = params.get('username') as string;
        return this.gitService.getRepo(this.userName);
      }
      )).subscribe(data => {
        console.log(data);
        this.repoList = data as JSONFormat[];
      });
    this.route.queryParamMap
      .subscribe(qParams => {
        this.p = qParams.get('p') || this.p;
        this.noPerPage = qParams.get('perpage') || this.noPerPage;
      });

    combineLatest([this.route.params, this.route.parent?.params, this.route.queryParams])
      .pipe(switchMap(paramsVal => {
        console.log(paramsVal);
        const params = paramsVal as any[];
        this.userName = params[1].username as string;
        const option: OptionDetails = {};
        // const qParams = params[2];
        // const queryParams = {} as JSONFormat;
        // queryParams.page = qParams.p;
        // queryParams.per_page = qParams.perpage;
        // option.params = queryParams;
        if (this.userName) {
          console.log(option);
          return this.gitService.getRepo(this.userName, option);
        } else {
          return of([]);
        }

      })).subscribe(data => {
        console.log(data);
        // this.repoList = data as JSONFormat[];
      });
  }
  pageChanged(e: any): void {
    this.router.navigate([], {
      queryParams: {
        p: e,
        perpage: this.noPerPage
      }
    });
  }

}
