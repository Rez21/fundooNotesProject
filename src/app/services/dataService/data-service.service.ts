import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private info = new Subject<any>();
  public store = this.info.asObservable();
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  viewMessage:any;
  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }

  // setMessage(data:any){
  //   this.viewMessage=data
  // }
  // getMessage(){
  //   return this.viewMessage
  // }
  viewUpdate(data:any){
    this.info.next(data)
  }
}
