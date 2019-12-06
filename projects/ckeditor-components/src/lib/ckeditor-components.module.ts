import { NgModule } from '@angular/core';
import { CKEditorComponentsComponent } from './ckeditor-components.component';
import { EmailEditorComponent } from './email-editor/email-editor.component';



@NgModule({
  declarations: [CKEditorComponentsComponent, EmailEditorComponent],
  imports: [
  ],
  exports: [CKEditorComponentsComponent, EmailEditorComponent]
})
export class CKEditorComponentsModule { }
