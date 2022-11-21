import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() recieveNoteList: any;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {

    console.log(this.recieveNoteList);
  }
  openDialog(note:any){
    const dialogRef=this.dialog.open(UpdateNotesComponent,{
      width:'50%',
      height:'auto',
      panelClass:"updateDialog",
      data:note,

    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed',result);
    })  
}
}
