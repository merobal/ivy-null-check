import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerBComponent } from './handler-b.component';

describe('HandlerBComponent', () => {
  let component: HandlerBComponent;
  let fixture: ComponentFixture<HandlerBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
