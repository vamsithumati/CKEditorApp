import { TestBed } from '@angular/core/testing';

import { CKEditorComponentsService } from './ckeditor-components.service';

describe('CKEditorComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CKEditorComponentsService = TestBed.get(CKEditorComponentsService);
    expect(service).toBeTruthy();
  });
});
