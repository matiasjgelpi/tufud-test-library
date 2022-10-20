import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusPlusComponent } from './minus-plus.component';

describe('MinusPlusComponent', () => {
  let component: MinusPlusComponent;
  let fixture: ComponentFixture<MinusPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinusPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
