import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InoteService } from '../../services/abstractions/inote.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteService:InoteService) {  }

  ngOnInit(): void {
  }

  onDeleteNote(note){
    this.noteService.addNote(note);
  }
    
}
