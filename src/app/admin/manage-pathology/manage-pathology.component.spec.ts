import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePathologyComponent } from './manage-pathology.component';

describe('ManagePathologyComponent', () => {
  let component: ManagePathologyComponent;
  let fixture: ComponentFixture<ManagePathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
