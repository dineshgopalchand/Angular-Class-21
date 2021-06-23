import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { JSONFormat } from 'src/app/shared/_help/jsonformat';
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
    this.route.queryParamMap.subscribe(qParams => {
      this.p = qParams.get('p') || this.p;
      this.noPerPage = qParams.get('perpage') || this.noPerPage;
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
