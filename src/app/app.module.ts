import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {MasterComponent} from './layouts/master/master.component';
import {UserComponent} from './pages/user/user.component';
import {UpdateUserComponent} from './pages/update-user/update-user.component';
import {RegisterComponent} from "./pages/register/register.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar.component';
import {UploadFileComponent} from './upload/upload-file/upload-file.component';
import {CreateSongComponent} from './songManage/create-song/create-song.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {MyListSongComponent} from "./songManage/my-list-song/my-list-song.component";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {DetailSongComponent} from './songManage/detail-song/detail-song.component';
import {NewListSongComponent} from './songManage/new-list-song/new-list-song.component';
import {AllSongComponent} from './songManage/all-song/all-song.component';
import {UpdateSongComponent} from './songManage/update-song/update-song.component';
import {ChangePasswordComponent} from './pages/change-password/change-password.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SearchComponent} from './pages/search/search.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {MatMenuModule} from "@angular/material/menu";
import {CreatePlaylistComponent} from './playlistManage/create-playlist/create-playlist.component';
import {AllPlaylistComponent} from './playlistManage/all-playlist/all-playlist.component';
import {MyPlaylistComponent} from './playlistManage/my-playlist/my-playlist.component';
import {DetailPlaylistComponent} from './playlistManage/detail-playlist/detail-playlist.component';
import {ManyListensListSongComponent} from './songManage/many-listens-list-song/many-listens-list-song.component';
import {UpdatePlaylistComponent} from './playlistManage/update-playlist/update-playlist.component';
import { ManyLikedListSongComponent } from './songManage/many-liked-list-song/many-liked-list-song.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MasterComponent,
    RegisterComponent,
    UserComponent,
    UpdateUserComponent,
    UploadAvatarComponent,
    UploadFileComponent,
    CreateSongComponent,
    MyListSongComponent,
    DetailSongComponent,
    NewListSongComponent,
    UpdateSongComponent,
    DetailSongComponent,
    AllSongComponent,
    ChangePasswordComponent,
    SearchComponent,
    SearchPageComponent,
    CreatePlaylistComponent,
    AllPlaylistComponent,
    MyPlaylistComponent,
    DetailPlaylistComponent,
    ManyListensListSongComponent,
    UpdatePlaylistComponent,
    ManyLikedListSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatProgressBarModule,
    NgxAudioPlayerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
