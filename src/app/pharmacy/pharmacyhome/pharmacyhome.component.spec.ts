import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyhomeComponent } from './pharmacyhome.component';

describe('PharmacyhomeComponent', () => {
  let component: PharmacyhomeComponent;
  let fixture: ComponentFixture<PharmacyhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
