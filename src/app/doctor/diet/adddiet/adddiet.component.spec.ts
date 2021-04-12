import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddietComponent } from './adddiet.component';

describe('AdddietComponent', () => {
  let component: AdddietComponent;
  let fixture: ComponentFixture<AdddietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
