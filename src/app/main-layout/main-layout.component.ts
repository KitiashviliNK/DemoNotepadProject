import { Component, OnInit, Input } from '@angular/core';
import {INote } from '../../models/abstractions/inote.model';
import {AuthGuardService} from '../../services/auth-guard.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  notelistCollection:INote[] = undefined; 
  formVisible:boolean = false;

  constructor(private authGurad:AuthGuardService) { 
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
