import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcottageComponent } from './addcottage.component';

describe('AddcottageComponent', () => {
  let component: AddcottageComponent;
  let fixture: ComponentFixture<AddcottageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcottageComponent]
    });
    fixture = TestBed.createComponent(AddcottageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
