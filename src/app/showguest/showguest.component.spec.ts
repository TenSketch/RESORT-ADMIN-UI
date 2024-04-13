import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowguestComponent } from './showguest.component';

describe('ShowguestComponent', () => {
  let component: ShowguestComponent;
  let fixture: ComponentFixture<ShowguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowguestComponent]
    });
    fixture = TestBed.createComponent(ShowguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
