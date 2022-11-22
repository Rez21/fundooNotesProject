import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private note: NoteService) { }
  @Input() noteCard: any;
  ngOnInit(): void {
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
    })
  }
  restore() {
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: false
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res: any) => {
      console.log(res);
    })
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
    })
  }

  //unarchive
  unarchive(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    console.log(payload);
    this.note.archiveNote(payload).subscribe((res: any) => {
      console.log(res);
    })
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
  //
  colorChange(color:any){
    this.noteCard.color=color
    let payload={
      color:color,
      noteIdList:[this.noteCard.id],
      
    }
    console.log(payload);
    this.note.colorService(payload).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
