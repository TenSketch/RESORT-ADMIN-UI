import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcottageComponent } from './viewcottage.component';

describe('ViewcottageComponent', () => {
  let component: ViewcottageComponent;
  let fixture: ComponentFixture<ViewcottageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcottageComponent]
    });
    fixture = TestBed.createComponent(ViewcottageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
