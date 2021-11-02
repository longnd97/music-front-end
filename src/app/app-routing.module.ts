import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {UpdateUserComponent} from "./pages/update-user/update-user.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CreateSongsComponent} from "./pages/create-songs/create-songs.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'users/:id/profile',
    component:UserComponent
  },
  {
    path:'users/:id/update',
    component:UpdateUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'songs/create',
    component:CreateSongsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
