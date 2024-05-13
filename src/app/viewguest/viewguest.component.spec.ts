import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewguestComponent } from './viewguest.component';

describe('ViewguestComponent', () => {
  let component: ViewguestComponent;
  let fixture: ComponentFixture<ViewguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewguestComponent]
    });
    fixture = TestBed.createComponent(ViewguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
