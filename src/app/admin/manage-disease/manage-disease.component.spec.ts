import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDiseaseComponent } from './manage-disease.component';

describe('ManageDiseaseComponent', () => {
  let component: ManageDiseaseComponent;
  let fixture: ComponentFixture<ManageDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
