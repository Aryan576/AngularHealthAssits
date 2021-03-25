import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocappintmentComponent } from './docappintment.component';

describe('DocappintmentComponent', () => {
  let component: DocappintmentComponent;
  let fixture: ComponentFixture<DocappintmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocappintmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocappintmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
