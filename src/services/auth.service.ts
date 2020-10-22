import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;    
  public redirectUrl: string;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private db : AngularFirestore) 
  { }

  checkUserState(): boolean{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return true} 
    });
    console.log("User is NOT!!  signed in");
    return false;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
       this.db.collection('users').doc(value.user.email).set({});
      if(this.checkUserState())
      {
        this.router.navigate(['main-page'])}
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        this.isLoggedIn = true;
        
        // if (this.redirectUrl) {
        //   this.router.navigate([this.redirectUrl]);
        //   this.redirectUrl = null;}
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
  }
}
