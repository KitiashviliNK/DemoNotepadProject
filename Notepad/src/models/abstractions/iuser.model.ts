import {INote } from '../../models/abstractions/inote.model';

export interface IUser
{
    email:string;
    password:string;
    noteCollection:INote[];
}