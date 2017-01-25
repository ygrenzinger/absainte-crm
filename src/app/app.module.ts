import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";

import { AppComponent } from './app.component';
import { DeleteModalContent } from './delete-modal.component';
import { NewMaterialComponent } from './material/new-material.component';
import { MaterialEditComponent } from './material/material-edit.component';
import { MaterialComponent } from './material/material.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { RessellerComponent } from './resseller/resseller.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCxzgEd7ecIVSILa51C2sXRTHbrmx5m9wc",
  authDomain: "absainte-crm-7c5a0.firebaseapp.com",
  databaseURL: "https://absainte-crm-7c5a0.firebaseio.com",
  storageBucket: "absainte-crm-7c5a0.appspot.com",
  messagingSenderId: "72292104963"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'material/new', component: NewMaterialComponent },
  { path: 'material/:key', component: MaterialEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PageNotFoundComponent, DeleteModalContent,
    MaterialComponent, NewMaterialComponent, MaterialEditComponent,
    RessellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  entryComponents: [DeleteModalContent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
