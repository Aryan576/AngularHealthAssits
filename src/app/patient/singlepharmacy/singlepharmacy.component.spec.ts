import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepharmacyComponent } from './singlepharmacy.component';

describe('SinglepharmacyComponent', () => {
  let component: SinglepharmacyComponent;
  let fixture: ComponentFixture<SinglepharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
