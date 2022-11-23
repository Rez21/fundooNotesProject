import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(reqdata: any){
    // console.log(reqdata);

    let header = {
      Headers:new HttpHeaders({
        'Content-type' : 'application/json',
      })
    }
    return this.httpService.postService("/user/userSignUp", reqdata, false, header)
  }

  login(payload: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-type' : 'application/json',
      })
    }
    return this.httpService.postService("/user/login", payload, false, header)
  }

  forgotPassword(dataload: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-type' : 'application/json',
      })
    }
    return this.httpService.postService("/user/reset", dataload, false, header)
  }
}

