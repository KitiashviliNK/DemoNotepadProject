import {INote } from '../../models/abstractions/inote.model';

export interface InoteService{
    addNote(note:INote);
    getNote(id:number);
    getNoteId(note:INote);
    updateNote(id:number, title:string, content:string);
    deleteNote(id:number);
}