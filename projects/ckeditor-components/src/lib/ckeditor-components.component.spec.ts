import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CKEditorComponentsComponent } from './ckeditor-components.component';

describe('CKEditorComponentsComponent', () => {
  let component: CKEditorComponentsComponent;
  let fixture: ComponentFixture<CKEditorComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CKEditorComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CKEditorComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
