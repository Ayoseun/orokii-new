import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserModule /* or CommonModule */, 
     ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
