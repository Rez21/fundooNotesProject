import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  message: any;
  @Output() eventForDisplay = new EventEmitter<string>();
  constructor(private note:NoteService,public dialogRef:MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any , private snackBar: MatSnackBar) {
      this.title=data.title;
      this.description=data.description;
      this.id=data.id;
     }
 onNoClick(){
        this.dialogRef.close();
       }

  ngOnInit(): void {
    // this.closeDialog();
  }

  closeDialog(){
    let data={
      title:this.title,
      description:this.description,
      noteId:this.id
    }
    this.note.updateNote(data).subscribe((response:any)=>{
      console.log("update response",response);
      this.dialogRef.close(response);
      this.SnackBar('Note Updated','Dismiss')
    })
  }
  recievedEventFromIcon($event: any) {
    console.log("event from icon to display", $event);
    this.message = $event;
    console.log("message", this.message);
    // this.eventForDisplay.emit(this.message)
  }

  SnackBar(msg: string, action:string){
    this.snackBar.open(msg, action, {
      duration: 3000
    });
  }
}
