import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authorize',
  templateUrl: './user-authorize.component.html',
  styleUrls: ['./user-authorize.component.css']
})
export class UserAuthorizeComponent implements OnInit {

  email:string;
  password:string;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
   if(this.authService.checkUserState()){
      this.router.navigate(['main-page'])
   };
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
