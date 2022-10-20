import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TufudMaterialTestLibraryComponent } from './tufud-material-test-library.component';

describe('TufudMaterialTestLibraryComponent', () => {
  let component: TufudMaterialTestLibraryComponent;
  let fixture: ComponentFixture<TufudMaterialTestLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TufudMaterialTestLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TufudMaterialTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
