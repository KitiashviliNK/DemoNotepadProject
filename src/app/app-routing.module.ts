import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserAuthorizeComponent } from './user-authorize/user-authorize.component';
import { AuthGuardService} from '../services/auth-guard.service'

const routes: Routes = [
  {path: 'main-page', component: MainLayoutComponent},
  {path: 'login', 
  component: UserAuthorizeComponent,
  canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
