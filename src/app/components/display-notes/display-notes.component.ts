import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AUTO_STYLE } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() recieveNoteList: any;
  @Output() eventForDisplay = new EventEmitter<string>();
  message: any;
  title: any;
  description: any;
  Search = '';
  isGridView = true;
  gridlist: any;
 
  constructor(public dialog: MatDialog, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.store.subscribe(a=>this.gridlist=a)
    console.log(this.recieveNoteList);

    //console.log(this.collaborators);
    this.dataService.currentMessage.subscribe((res: any) => {
      console.log(res)
      this.Search = res;
    })

  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      //  width: '100%',
      // height: 'auto',
      panelClass: "updateDialog",
      data: note,

    });
    dialogRef.afterClosed().subscribe(result => {
      this.title;
      this.description;
      console.log('The dialog was closed', result);
      this.eventForDisplay.emit(result)
    })
  }
  recievedEventFromIcon($event: any) {
    console.log("event from icon to display", $event);
    this.message = $event;
    console.log("message", this.message);
    this.eventForDisplay.emit(this.message)
  }
}
