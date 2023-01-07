import { Component, createComponent, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/notesService/notes-service.service';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  private datetimereminder = new Date(Date.now());

  constructor(private note: NoteService,private route:ActivatedRoute,private snackBar: MatSnackBar) { }
  @Input() noteCard: any;
  @Output() IconEvent = new EventEmitter<string>();
  isArchiveNotesComponent = false;
  isDisplayNotesComponent = false;
  isTrashNotesComponent = false;

  ngOnInit(): void {
    let  IconNext = this.route.snapshot.component;

    if(IconNext == ArchiveNotesComponent )
    {
      this.isArchiveNotesComponent=true;
    }

    if(IconNext == GetAllNotesComponent && IconNext)
    {
      this.isDisplayNotesComponent=true;
    }

    if(IconNext == TrashNotesComponent)
    {
      this.isTrashNotesComponent=true;
    }
    if(IconNext == CreateNotesComponent){
      this.isDisplayNotesComponent=true;
    }



  }
  //trash
  trash() {
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res: any) => {
      console.log(res);
      this.IconEvent.emit(res)
    })
    this.SnackBar('Note Deleted','Dismiss')
  }
  //Archive
  archive(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    console.log(payload);
    this.note.archiveNote(payload).subscribe((res: any) => {
      console.log(res);
      this.IconEvent.emit(res)
    })
    this.SnackBar('Note Archived','Dismiss')
  }

  //unarchive
  unArchive(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    console.log(payload);
    this.note.archiveNote(payload).subscribe((res: any) => {
      console.log(res);
      this.IconEvent.emit(res)
    })
    this.SnackBar('Note Unarchived','Dismiss')
  }

  // array of colors
  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];
  // //
  colorChange(color:any){
    this.noteCard.color=color
    let payload={
      color:color,
      noteIdList:[this.noteCard.id],
      
    }
    console.log(payload);
    this.note.colorService(payload).subscribe((res:any)=>{
      console.log(res);
      this.IconEvent.emit(res)
    })
  }

  restore(){
    let payload={
      noteIdList:[this.noteCard.id],
      isDeleted:false,
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)
    })
    this.SnackBar('Note Restored','Dismiss')
  }
  delete(noteIdList:any){
    let payload={
      noteIdList:[this.noteCard.id],
    }
    this.note.permanentDelete(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)
    })
    this.SnackBar('Note Deleted Permenantly','Dismiss')
  }
  setReminder(){
    let data={

    }
  }

  SnackBar(msg: string, action:string){
    this.snackBar.open(msg, action, {
      duration: 3000
    });
  }
}
