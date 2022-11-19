import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }
  addNote(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/addNotes", payload, true, header)
  }

  getAllNote() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService("/notes/getNotesList", true, header)
  }
  //trash service
  trashNote(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/trashNotes", payload, true, header)
  }
  // archive service
  archiveNote(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/archiveNotes", payload, true, header)
  }
  // update
  updateNote(payload:any){
    let header ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/updateNotes", payload, true, header)
  }

  getAllTrashNote(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService("/notes/getTrashNotesList",true,header)
  }

  getAllArchiveNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService("/notes/getArchiveNotesList",true,header)
  }
}

