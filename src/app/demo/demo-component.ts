import {
    Component,
    ViewChild,
    AfterViewInit,
    ElementRef
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'app-demo-form',
    templateUrl: './demo-component.html',
    styleUrls: ['./demo-form.component.css']
})

export class DemoFormComponent implements AfterViewInit {
    @ViewChild('demoForm', { static: true }) demoForm?: NgForm;
    @ViewChild('preview', { static: true }) preview: ElementRef;
    @ViewChild('editor', { static: true }) editor;

    public model = {
        name: 'John',
        surname: 'Doe',
        description: '<p>This is a sample form using CKEditor 4 and created in Angular.</p>'
    };

    public isPreviewActive: boolean;

    public previewModel: string;

    onSubmit() {
        alert(`Form submit, model: ${JSON.stringify(this.model)}`);
    }

    reset() {
        this.demoForm!.reset();
    }

    get description() {
        return this.demoForm!.controls.description;
    }

    ngAfterViewInit() {
        // this.editor.dataChange.subscribe( ( value ) => {
        //     //if ( !this.isPreviewActive ) {
        //         this.previewModel = value;
        //     //}
        // } );
    }
}