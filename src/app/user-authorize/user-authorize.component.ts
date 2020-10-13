import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-authorize',
  templateUrl: './user-authorize.component.html',
  styleUrls: ['./user-authorize.component.css']
})
export class UserAuthorizeComponent implements OnInit {

  email:string;
  password:string;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
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
