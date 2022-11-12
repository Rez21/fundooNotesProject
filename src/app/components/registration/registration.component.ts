import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) {
   }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: ['advanced', Validators.required]
   }, {
       validator: MustMatch('password', 'confirmPassword')
   });
  }
  
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.valid) {
    let reqdata = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      service: this.registerForm.value.service
    }
      this.user.registration(reqdata).subscribe((response: any)=>{
          console.log(response);
      })
  }
}
}


function MustMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}



