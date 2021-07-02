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

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
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

        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.signInForm.setErrors({ message: error.message });
        console.log(this.signInForm);
      });
  }

}
