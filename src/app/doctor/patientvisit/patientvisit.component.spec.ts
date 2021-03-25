import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvisitComponent } from './patientvisit.component';

describe('PatientvisitComponent', () => {
  let component: PatientvisitComponent;
  let fixture: ComponentFixture<PatientvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
