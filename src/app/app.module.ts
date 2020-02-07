import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { MethodsService } from './services/methods.service';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { UploadComponent } from './pages/upload/upload.component';

import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'jamesdajs',upload_preset:"pxn9rtdp"}),
    FileUploadModule,
    HttpClientModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
