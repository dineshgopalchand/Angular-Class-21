import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../validators/name.validators';
import { PatternValidators } from '../validators/pattern.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  patternList = [
    {
      pattern: /(?=.*?[A-Z])/,
      error: 'At least one upper case English letter',
    },
    {
      pattern: /(?=.*?[a-z])/,
      error: 'At least one lower case English lette',
    },
    {
      pattern: /(?=.*?[0-9])/,
      error: 'At least one digit',
    },
    {
      pattern: /(?=.*?[#?!@$%^&*-])/,
      error: 'At least one special character',
    },
    {
      pattern: /.{8,}/,
      error: 'Minimum eight in length',
    }
  ];

  signUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[ a-z]+$/i),
      NameValidators.cannotContainsSpace
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z]+$/i)
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[0-9A-Za-z.-]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      PatternValidators.multiplePatterValidation(this.patternList)
    ]),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.signUpForm);
    console.log((this.signUpForm.get('firstName') as FormControl).touched);
  }

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }
  get userName(): FormControl {
    return this.signUpForm.get('userName') as FormControl;
  }
  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  resetForm(): void {
    this.signUpForm.reset();
  }
}
