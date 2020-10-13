import { INote } from '../abstractions/inote.model';

export class Note implements INote
{
    Id:number;
    Title:string;
    Content:string;
    CreateDateTime:Date

    constructor(){}
    // constructor(noteTitle:string, noteText:string)
    // {
    //     this.NoteTitle = noteTitle;
    //     this.NoteText = noteText;
    //     this.CreateDateTime = new Date();
    // }
}