import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,
  NgModel, } from '@angular/forms';

// import { MustMatch } from '.components/registration/RegistrationComponent/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     // confirmPassword: ['', Validators.required]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  // });
  });
  }

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.valid) {
      console.log("form submitted");
  }
}
}
