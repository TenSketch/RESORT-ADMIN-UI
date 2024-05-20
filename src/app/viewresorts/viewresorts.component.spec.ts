import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresortsComponent } from './viewresorts.component';

describe('ViewresortsComponent', () => {
  let component: ViewresortsComponent;
  let fixture: ComponentFixture<ViewresortsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewresortsComponent]
    });
    fixture = TestBed.createComponent(ViewresortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
