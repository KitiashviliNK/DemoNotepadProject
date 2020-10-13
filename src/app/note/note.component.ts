import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/implementations/note.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { INote } from 'src/models/abstractions/inote.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note:INote;

  constructor() {  }

  ngOnInit(): void {
  }

  onDeleteNote(note){
    // this.noteService.deleteNote(note);
  }
    
}
