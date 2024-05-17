import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkPreviewComponent } from './park-preview.component';

describe('ParkPreviewComponent', () => {
  let component: ParkPreviewComponent;
  let fixture: ComponentFixture<ParkPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkPreviewComponent]
    });
    fixture = TestBed.createComponent(ParkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
