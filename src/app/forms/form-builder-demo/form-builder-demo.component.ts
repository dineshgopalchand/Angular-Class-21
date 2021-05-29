import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.scss']
})
export class FormBuilderDemoComponent implements OnInit {

  signUp: FormGroup;
  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    contact: new FormArray([
      new FormControl('')
    ]),
    paddress: new FormGroup({
      s1: new FormControl(''),
      location: new FormControl('')
    })

  });
  constructor(private fb: FormBuilder) {
    this.signUp = fb.group({
      firstname: fb.control('', [Validators.required]),
      lastname: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      contact: fb.array([
        ['']
      ]),
      paddress: fb.group({
        s1: [''],
        location: ['']
      })

    });
  }

  ngOnInit(): void {
  }

}
