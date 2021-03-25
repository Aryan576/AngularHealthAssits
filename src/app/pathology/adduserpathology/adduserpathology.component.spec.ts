import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserpathologyComponent } from './adduserpathology.component';

describe('AdduserpathologyComponent', () => {
  let component: AdduserpathologyComponent;
  let fixture: ComponentFixture<AdduserpathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserpathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserpathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
