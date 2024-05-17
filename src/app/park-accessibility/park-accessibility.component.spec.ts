import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkAccessibilityComponent } from './park-accessibility.component';

describe('ParkAccessibilityComponent', () => {
  let component: ParkAccessibilityComponent;
  let fixture: ComponentFixture<ParkAccessibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkAccessibilityComponent]
    });
    fixture = TestBed.createComponent(ParkAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
