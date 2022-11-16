import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})
export class ForgetEmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
