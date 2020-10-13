import { Injectable } from '@angular/core';
import { INote } from '../../models/abstractions/inote.model';
import { InoteService } from '../abstractions/inote.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements InoteService {

  notelistCollection:INote[] = undefined; 

  constructor() {
    this.notelistCollection = [];
   }
  
  addNote(note: INote) {
    this.notelistCollection.unshift(note);
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
