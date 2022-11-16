import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: ['advanced', Validators.required]
    });
  }
  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.valid) {
      console.log("Email verified.");
      let dataload = {
        email: this.forgotPasswordForm.value.email,
        service: this.forgotPasswordForm.value.service
      }
      this.user.forgotPassword(dataload).subscribe((response: any) => {
        console.log(response)
      }
      )
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotPasswordForm.value))
  }

}
