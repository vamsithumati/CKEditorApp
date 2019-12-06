import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CKEditorModule} from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo/demo-component';
import { FormsModule } from '@angular/forms';
import {CKEditorComponentsModule} from 'ckeditor-components';
import { EmailEditorComponent } from './email-editor/email-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    EmailEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    CKEditorComponentsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
