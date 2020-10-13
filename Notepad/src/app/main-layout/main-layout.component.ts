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
        
    // let oHeight:any = $(document).height();
    //  // execute resize() when the browser window size changes          
    //   $(window).resize(function(){     
    //                if( $(document).height() < oHeight){
    //                 $(".add-note").css("position","static");
    //                 }else{
    //                       $(".add-note").css("position","fixed"); //adsolute or fixed, see your layout
    //                 }
    //     });

    // for(let i = 0; i< 7; i++){
    //   this.notelistCollection.push(new Note("აბდგევ", "ჩიტი გვრიტი მოფრინავდა ჰოუვ რანინააა"));
    // }

  } 

  addNewNote(){
    this.formVisible = !this.formVisible;
  }

  onAddNoteClickSub(noteObj)
  {
    noteObj.Id = this.notelistCollection.length; 
    this.notelistCollection.unshift(noteObj);
    localStorage.setItem("noteData", JSON.stringify(this.notelistCollection));
    this.formVisible = !this.formVisible;
  }
}
