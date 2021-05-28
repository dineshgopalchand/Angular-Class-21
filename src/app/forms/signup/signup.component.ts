import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../validators/name.validators';
import { PatternError, PatternValidators } from '../validators/pattern.validators';
import { UsernameValidators } from '../validators/username.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  patternList: PatternError[] = [
    {
      errorkey: 'capitalletter',
      pattern: /(?=.*?[A-Z])/,
      error: 'At least one upper case English letter',
    },
    {
      errorkey: 'lowerletter',
      pattern: /(?=.*?[a-z])/,
      error: 'At least one lower case English lette',
    },
    {
      errorkey: 'numbermissing',
      pattern: /(?=.*?[0-9])/,
      error: 'At least one digit',
    },
    {
      errorkey: 'specialcharecter',
      pattern: /(?=.*?[#?!@$%^&*-])/,
      error: 'At least one special character',
    },
    {
      errorkey: 'requiredlength',
      pattern: /.{8,}/,
      error: 'Minimum length required is 8',
    }
  ];

  signUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z]+$/i),
      NameValidators.cannotContainsSpace
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z]+$/i),
      NameValidators.cannotContainsSpace
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/^[0-9A-Za-z.-]+$/)
    ],
      UsernameValidators.shouldBeUnique
      // [UsernameValidators.shouldBeUnique]
    ),
    password: new FormControl('', [
      Validators.required,
      PatternValidators.multiplePatterValidation(this.patternList)
    ]),
    contact: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('')
    })
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
  get email(): FormControl {
    return this.signUpForm.get('contact.email') as FormControl;
  }
  get phone(): FormControl {
    return this.signUpForm.get('contact.phone') as FormControl;
  }

  resetForm(): void {
    this.signUpForm.reset();
  }

  signUpFormSubmit(): void {
    console.log(this.signUpForm.value);
    this.signUpForm.setErrors({ network: 'internet connection failed' }); // setting error on form group
    this.password.setErrors({}); // setting error on particular control

  }
}
