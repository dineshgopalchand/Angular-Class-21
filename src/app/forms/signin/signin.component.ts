import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  returnUrl: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params.returnUrl || '/';
    });
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  get username(): FormControl {
    return this.signInForm.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  signFormSubmit(): void {
    console.log(this.signInForm.value);
    this.authenticationService.signin(this.signInForm.value)
      .subscribe(res => {
        console.log(res);
        console.log(this.returnUrl);
        // return this.router.navigate(['/task']);
        return this.router.navigate([this.returnUrl]);
      }, error => {
        console.log(error);
        this.signInForm.setErrors({ error: error.error });
        // console.log(this.signInForm);
      });
  }

}
