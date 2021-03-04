import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpathologyComponent } from './addpathology.component';

describe('AddpathologyComponent', () => {
  let component: AddpathologyComponent;
  let fixture: ComponentFixture<AddpathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
