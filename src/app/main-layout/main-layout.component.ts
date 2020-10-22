import { Component, OnInit, Input } from '@angular/core';
import {INote } from '../../models/abstractions/inote.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  notelistCollection:INote[] = undefined; 
  formVisible:boolean = false;

  constructor() { 
    this.notelistCollection = [];
  }

  ngOnInit(): void {
    this.notelistCollection  = JSON.parse(localStorage.getItem("noteData")) || [];

  } 

  addNewNote(){
    this.formVisible = !this.formVisible;
  }

  onAddNoteClickSub(boolean)
  {
    this.formVisible = !this.formVisible;
  }
}
