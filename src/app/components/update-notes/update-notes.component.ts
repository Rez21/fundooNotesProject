import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title:any;
  description:any;
  id:any;
  constructor(private note:NoteService,public dialogRef:MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.title=data.title;
      this.description=data.description;
      this.id=data.id; }
 onNoClick(){
        this.dialogRef.close();
       }

  ngOnInit(): void {}

  closeDialog(){
    let data={
      title:this.title,
      description:this.description,
      noteId:this.id
    }
    this.note.updateNote(data).subscribe((response:any)=>{
      console.log("update response",response);
      this.dialogRef.close(response);
    })
  }
}
