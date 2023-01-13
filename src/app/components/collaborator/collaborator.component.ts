import { Component, EventEmitter, OnInit, Output,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Output() eventForDisplay = new EventEmitter<string>();

  id:any;
  user:any;
  collabData: any;
  collabList: any = [];
  profileName: any;
  firstname:any;
  lastname:any;
  collaborators: any=[];
  collabEmail: any = '';
  collabname:any;
  constructor( public dialogRef:MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private note:NoteService) {
    this.user = data.user.email
    this.profileName = data.user.firstName[0];
    this.firstname=data.user.firstName
    this.lastname=data.user.lastName
    this.collaborators=data.collaborators;
    this.collabname = data.collaborators.firstName;
   }
  
  ngOnInit(): void {
  }

  // closeDialog(){
  //   let data={
  //     noteId:this.id,
  //   }
  //   this.note.updateNote(data).subscribe((response:any)=>{
  //     console.log("update response",response);
  //     this.dialogRef.close(response);
  //    
  //   })
  // }

  addCollab() {
    let data = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    console.log(data);
    this.note.addCollaborator(this.data.id, data).subscribe((response: any) => {
      console.log(response);
    })
  }


  collab(event: any) {
    console.log(event.target.value);

    let data = {
      searchWord: (event.target.value)
    }
    this.note.getCollaborator(data).subscribe((response: any) => {
      console.log(response);
      this.collabList = response.data.details
    })
  }

  selectCollab(data: any) {
    this.collabData = data
    this.collabEmail = data.email
  }
  save(collabList:any){
    this.dialogRef.close(collabList);
    
  }

  removeCollab(collabid:any){
    this.note.removeCollaborator(this.data.id, collabid).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
