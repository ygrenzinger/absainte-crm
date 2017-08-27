import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SelectModule } from 'ng-select';

import { AppComponent } from './app.component';
import { DeleteModalContent } from './delete-modal.component';
import { NewMaterialComponent } from './material/new-material.component';
import { MaterialEditComponent } from './material/material-edit.component';
import { MaterialComponent } from './material/material.component';
import { NewProductComponent } from './product/new-product.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';

const firebaseConfig = {
  apiKey: "AIzaSyCxzgEd7ecIVSILa51C2sXRTHbrmx5m9wc",
  authDomain: "absainte-crm-7c5a0.firebaseapp.com",
  databaseURL: "https://absainte-crm-7c5a0.firebaseio.com",
  projectId: "absainte-crm-7c5a0",
  storageBucket: "absainte-crm-7c5a0.appspot.com",
  messagingSenderId: "72292104963"
}

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'material/new', component: NewMaterialComponent },
  { path: 'material/:key', component: MaterialEditComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/new', component: NewProductComponent },
  { path: 'product/:key', component: ProductComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PageNotFoundComponent, DeleteModalContent,
    MaterialComponent, NewMaterialComponent, MaterialEditComponent,
    ProductComponent, NewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'absainte-crm'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SelectModule
  ],
  providers: [],
  entryComponents: [DeleteModalContent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
