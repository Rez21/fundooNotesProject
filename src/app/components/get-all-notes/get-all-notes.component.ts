import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  NoteList=[]
  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getAllNote()
  }

  getAllNote(){
    this.note.getAllNote().subscribe((response:any)=>{
      console.log(response);
      this.NoteList=response.data.data
      console.log(this.NoteList);// gives list in console
    })
  }

}
