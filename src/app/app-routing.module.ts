import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserAuthorizeComponent } from './user-authorize/user-authorize.component';

const routes: Routes = [
  {path: '',  component: UserAuthorizeComponent},
  {path: 'main-page', component: MainLayoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
