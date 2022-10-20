import { TestBed } from '@angular/core/testing';

import { TufudMaterialTestLibraryService } from './tufud-material-test-library.service';

describe('TufudMaterialTestLibraryService', () => {
  let service: TufudMaterialTestLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TufudMaterialTestLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
