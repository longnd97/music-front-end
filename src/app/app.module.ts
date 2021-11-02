import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {MasterComponent} from './layouts/master/master.component';
import {UserComponent} from './pages/user/user.component';
import {UpdateUserComponent} from './pages/update-user/update-user.component';
import {RegisterComponent} from "./pages/register/register.component";
import {CreateSongsComponent} from './pages/create-songs/create-songs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";

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
    CreateSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
