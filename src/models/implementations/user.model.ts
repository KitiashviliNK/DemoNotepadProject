import { INote } from '../abstractions/inote.model';
import { IUser } from '../abstractions/IUser.model';

export class User implements IUser
{
    email: string;
    password: string;
    noteCollection: INote[];
    
    constructor(){

    }
}