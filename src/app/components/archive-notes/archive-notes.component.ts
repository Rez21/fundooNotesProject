import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {

  ArchiveNoteList=[]
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchiveNotes()
  }
  
  getArchiveNotes(){
    this.note.getAllArchiveNotes().subscribe((response: any)=>{
      this.ArchiveNoteList= response.data.data
    })
  }
}
