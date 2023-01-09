import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  title: any;
  description: any;
  isShow = false;
  message: any;
  @Output() IconEvent = new EventEmitter<string>();
  @Output() CreateEvent = new EventEmitter<string>();
  constructor(private note: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  Show() {
    this.isShow = true;
  }
  Close(){
    
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)
      let payload = {
        "title": this.title,
        "description": this.description
      }
      this.note.addNote(payload).subscribe((res: any) => {
        console.log(res);
        this.CreateEvent.emit(res)
        this.SnackBar('Note Created','Dismiss')
      })}
  }

  recievedEventFromIcon($event: any) {
    console.log("event from icon to display", $event);
    this.message = $event;
    console.log("message", this.message);
    this.IconEvent.emit(this.message)
  }

  SnackBar(msg: string, action:string){
    this.snackBar.open(msg, action, {
      duration: 3000
    });
  }

} 
