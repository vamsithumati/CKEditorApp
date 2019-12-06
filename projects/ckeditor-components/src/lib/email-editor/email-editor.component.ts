
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'CKE-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit, OnChanges {
  @Input() data: any;
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