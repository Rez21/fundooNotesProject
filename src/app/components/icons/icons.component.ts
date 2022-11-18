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

}
