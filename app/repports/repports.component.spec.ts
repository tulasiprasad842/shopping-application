import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepportsComponent } from './repports.component';

describe('RepportsComponent', () => {
  let component: RepportsComponent;
  let fixture: ComponentFixture<RepportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
