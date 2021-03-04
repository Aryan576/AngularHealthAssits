import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclinicComponent } from './addclinic.component';

describe('AddclinicComponent', () => {
  let component: AddclinicComponent;
  let fixture: ComponentFixture<AddclinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
