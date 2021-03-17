import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDietComponent } from './manage-diet.component';

describe('ManageDietComponent', () => {
  let component: ManageDietComponent;
  let fixture: ComponentFixture<ManageDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
