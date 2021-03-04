import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpharmacyComponent } from './addpharmacy.component';

describe('AddpharmacyComponent', () => {
  let component: AddpharmacyComponent;
  let fixture: ComponentFixture<AddpharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
