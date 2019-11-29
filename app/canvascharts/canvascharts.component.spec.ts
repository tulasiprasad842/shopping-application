import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaschartsComponent } from './canvascharts.component';

describe('CanvaschartsComponent', () => {
  let component: CanvaschartsComponent;
  let fixture: ComponentFixture<CanvaschartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvaschartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvaschartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
