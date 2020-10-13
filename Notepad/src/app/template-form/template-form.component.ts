import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INote } from 'src/models/abstractions/inote.model';
import { Note } from 'src/models/implementations/note.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Input() showForm = false;
  
  @Output() onAddNoteClickEmit:EventEmitter<INote> = undefined;
  note:INote = undefined;
  constructor() 
  { 
    this.onAddNoteClickEmit = new EventEmitter();
    this.note = new Note();
  }

  ngOnInit(): void {
  }

  onAddNoteClick(form:NgForm){
    // if(noteTitle.length == 0)
    // {
    //   noteTitle = noteText.substring(0,12) + "...";
    // }
    // if(noteText.length != 0)
    // {
    //   this.note = new Note(noteTitle, noteText);
    //   this.onAddNoteClickEmit.emit(this.note);
    // }
    console.log(form);
  }
}
