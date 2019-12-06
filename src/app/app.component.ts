import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = '<h3>I am EditorContent</h3>';

  title = 'CKEditorApp';
  ngOnInit() {
    setTimeout(() => {
      // this.data = this.data + ' Hi';
    }, 2000);
  }

  saveData(data) {
    console.log(data);
  }
}


