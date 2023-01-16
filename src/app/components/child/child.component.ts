
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  students =[{ firstName:'prasad', lastName:'Ban'},
  { firstName:'ajay', lastName:'rathod'},{ firstName:'bhargavi', lastName:'chandana'},{ firstName:'sandeep', lastName:'singh'}]; 
  @Output() comp = new EventEmitter<any>();
  constructor() { }

  share(){
    this.comp.emit(this.students)
  }

  ngOnInit(): void {
  }
  
  

}
