
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  show: boolean = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: "advance",
    });



  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log("User login successfully");
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: this.loginForm.value.service
      }

      this.user.login(payload).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.id);
        this.router.navigateByUrl('/dashboard/notes')
        this.SnackBar('Signed In', 'Dismiss')
      }
      )
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

 
  SnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action);
  }
}
