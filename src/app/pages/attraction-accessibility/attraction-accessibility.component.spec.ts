import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionAccessibilityComponent } from './attraction-accessibility.component';

describe('AttractionAccessibilityComponent', () => {
  let component: AttractionAccessibilityComponent;
  let fixture: ComponentFixture<AttractionAccessibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionAccessibilityComponent]
    });
    fixture = TestBed.createComponent(AttractionAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
