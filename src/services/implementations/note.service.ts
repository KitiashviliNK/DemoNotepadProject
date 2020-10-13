import { Injectable } from '@angular/core';
import { INote } from '../../models/abstractions/inote.model';
import { InoteService } from '../abstractions/inote.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements InoteService {

  notelistCollection:INote[] = undefined; 

  constructor(private db: AngularFirestore, ) {
    this.notelistCollection = [];
   }
  
  addNote(note: INote) {
    this.notelistCollection.unshift(note);
    localStorage.setItem("noteData", JSON.stringify(this.notelistCollection));
  }
  getAllNote(){
    return this.notelistCollection;
  }
  getNote(id: number) {
    return this.notelistCollection[id];
  }
  getNoteId(note: INote) {
    return this.notelistCollection.indexOf(note);
  }
  updateNote(id: number, title: string, content: string) {
    var note = this.notelistCollection[id];
    note.Title = title;
    note.Content = content;
  }
  deleteNote(id:number){
    this.notelistCollection.splice(id,1);
  }
}
