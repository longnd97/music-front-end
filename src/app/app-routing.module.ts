import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {UpdateUserComponent} from "./pages/update-user/update-user.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CreateSongComponent} from "./songManage/create-song/create-song.component";
import {canActivate} from "@angular/fire/auth-guard";
import {AuthGuard} from "./guards/auth.guard";
import {MyListSongComponent} from "./songManage/my-list-song/my-list-song.component";
import {DetailSongComponent} from "./songManage/detail-song/detail-song.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {UpdateSongComponent} from "./songManage/update-song/update-song.component";
import {SearchComponent} from "./pages/search/search.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {CreatePlaylistComponent} from "./playlistManage/create-playlist/create-playlist.component";
import {MyPlaylistComponent} from "./playlistManage/my-playlist/my-playlist.component";
import {DetailPlaylistComponent} from "./playlistManage/detail-playlist/detail-playlist.component";

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'songs/:id/detail',
      component: DetailSongComponent,
    },]
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'users/:id/update',
    component: UpdateUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'songs/create',
    component: CreateSongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/my-songs',
    component: MyListSongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/search/:key',
    component: SearchPageComponent,
    children: [{
      path: 'songs/:id/detail',
      component: DetailSongComponent,
    },]
  },
  {
    path: 'songs/my-songs/:id/update',
    component: UpdateSongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/:id/play',
    component: DetailSongComponent,
  },
  {
    path: 'playlist/create',
    component: CreatePlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist/my-playlist',
    component: MyPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist/:id/detail',
    component: DetailPlaylistComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
