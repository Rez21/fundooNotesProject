import { Component, OnInit } from '@angular/core';
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
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }

  Show() {
    this.isShow = true;
  }
  Close(){
    this.isShow=false;
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)
      let payload = {
        "title": this.title,
        "description": this.description
      }
      this.note.addNote(payload).subscribe((res: any) => {
        console.log(res);
      })}
  }

} 
