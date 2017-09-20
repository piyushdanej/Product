import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { Uploader } from 'angular2-http-file-upload';
import { Ng2UploaderModule } from 'ng2-uploader';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2UploaderModule
  ],
  providers: [Uploader],
  bootstrap: [AppComponent]
})
export class AppModule { }
