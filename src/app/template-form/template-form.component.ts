import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { INote } from 'src/models/abstractions/inote.model';
import { Note } from 'src/models/implementations/note.model';
import { NoteService } from 'src/services/implementations/note.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Input() showForm = false;
  
  @Output() onAddNoteClickEmit:EventEmitter<INote> = undefined;
  note:INote ;
  constructor(private noteService:NoteService) 
  { 
    this.onAddNoteClickEmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onAddNoteClick(form:NgForm){
    var title = form.value.titleInput;
    var content = form.value.contentInput;
    if(title.length == 0)
    {
      title = content.substring(0,12) + "...";
    }
    if(content.length != 0)
    {
      this.note = new Note(title, content);
      this.noteService.addNote(this.note);
      this.onAddNoteClickEmit.emit();
    }
    // console.log(form);
  }
}
