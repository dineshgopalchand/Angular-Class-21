import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  gitSearchForm: FormGroup;
  gitUserName = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.gitSearchForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(params => {
        // console.log(params);
        this.gitUserName = params.get('username') as string;
        this.username.setValue(this.gitUserName);
      });
    // this.activatedRoute.params
    //   .subscribe(param => {
    //     console.log(param.username);
    //   });
  }
  get username(): FormControl {
    return this.gitSearchForm.get('username') as FormControl;
  }

  searchFromSubmit(): void {
    console.log(this.username.value);
    // Navigated programmatically
    const userval = this.username.value;
    // this.router.navigate(['github', userval]); // without relative path
    if (this.gitUserName) {
      this.router.navigate(['../', userval], { relativeTo: this.activatedRoute }); // with relative path
    } else {
      this.router.navigate([userval], { relativeTo: this.activatedRoute }); // with relative path
    }
  }

}
