import { Component, EventEmitter, OnInit, Output,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor( public dialogRef:MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private note:NoteService,private snackBar: MatSnackBar) {
    this.user = data.user.email
    this.profileName = data.user.firstName[0];
    this.firstname=data.user.firstName
    this.lastname=data.user.lastName
    this.collaborators=data.collaborators;
    this.collabname = data.collaborators.firstName;
   }
  
  ngOnInit(): void {
  }

   closeDialog(){
   
       this.dialogRef.close()
  
   }

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
      this.collaborators.push(data);
    })
    this.SnackBar('Collaborator Added','Dismiss')
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
    this.SnackBar('Collaborators Saved','Dismiss')
  }

  removeCollab(collabid:any){
    this.note.removeCollaborator(this.data.id, collabid).subscribe((res:any)=>{
      console.log(res);
      this.collaborators.pop(collabid)
    })
    this.SnackBar('Collaborator removed','Dismiss')
  }

  SnackBar(msg: string, action:string){
    this.snackBar.open(msg, action, {
      duration: 3000
    });
  }
}
