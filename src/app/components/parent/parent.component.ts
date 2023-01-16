import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  studentsArray: any=[];
  name:any;
  surname:any;
  constructor() { }

  ngOnInit(): void {
  }
   
  getArray(data:any){
    this.studentsArray= data
    this.dataSource=data
  }
  displayedColumns: string[] = ['name', 'surname',];
  dataSource = this.studentsArray;
 
}
