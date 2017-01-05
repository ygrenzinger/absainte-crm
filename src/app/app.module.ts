import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";

import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCxzgEd7ecIVSILa51C2sXRTHbrmx5m9wc",
  authDomain: "absainte-crm-7c5a0.firebaseapp.com",
  databaseURL: "https://absainte-crm-7c5a0.firebaseio.com",
  storageBucket: "absainte-crm-7c5a0.appspot.com",
  messagingSenderId: "72292104963"
};

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
