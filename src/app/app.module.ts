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
import { DetailSongComponent } from './songManage/detail-song/detail-song.component';


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
    DetailSongComponent
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
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
