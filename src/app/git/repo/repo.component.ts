import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activedRoute: ActivatedRoute, private gitService: GitDetailsService) { }

  ngOnInit(): void {

    //  activedRoute.paramMap or activedRoute.params will help us to get params data of url from same route
    this.activedRoute.paramMap
      .subscribe(params => {
      });

    //  activedRoute.paramMap or activedRoute.params will help us to get params data for url from parent route
    this.activedRoute.parent?.paramMap
      .pipe(switchMap(params => {
        console.log(params);
        this.userName = params.get('username') as string;
        return this.gitService.getRepo(this.userName);
      }
      )).subscribe(data => {
        console.log(data);
        this.repoList = data as JSONFormat[];
      });
  }

}
