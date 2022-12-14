import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  TrashNoteList=[]
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }
  
  getTrashNotes(){
    this.note.getAllTrashNote().subscribe((response: any)=>{
      this.TrashNoteList= response.data.data
      console.log(this.TrashNoteList)
      this.TrashNoteList=this.TrashNoteList.filter((result:any)=>{
        return result.isArchived==false && result.isDeleted==true;
      })
    })
  }
   updateEvent($event:any){
     this.getTrashNotes();
   }
}
