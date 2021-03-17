import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepathologyComponent } from './singlepathology.component';

describe('SinglepathologyComponent', () => {
  let component: SinglepathologyComponent;
  let fixture: ComponentFixture<SinglepathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
