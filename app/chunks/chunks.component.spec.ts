import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunksComponent } from './chunks.component';

describe('ChunksComponent', () => {
  let component: ChunksComponent;
  let fixture: ComponentFixture<ChunksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
