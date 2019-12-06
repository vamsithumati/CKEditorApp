
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
@Component({
  selector: 'CKE-local-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit, OnChanges {
   @Input() data: any ;
   @Output() saveData: EventEmitter<any>;
   constructor() {
    this.saveData = new EventEmitter();
   }
   ngOnInit() {
          document.getElementById('CKEditorInputTag').innerHTML = this.data;
   }
  onSubmit() {
    this.saveData.emit(document.getElementById('CKEditorInputTag').innerHTML);
  }
  refreshData(e) {
    document.getElementById('CKEditorInputTag1').innerHTML = this.data;
    console.log('sdfsd');
    e.preventDefault();
  }
  ngOnChanges(simple: SimpleChanges) {
    console.log(simple);
    document.getElementById('CKEditorInputTag').innerHTML = this.data;
  }
}