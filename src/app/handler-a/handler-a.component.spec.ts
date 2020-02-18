import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerAComponent } from './handler-a.component';

describe('HandlerAComponent', () => {
  let component: HandlerAComponent;
  let fixture: ComponentFixture<HandlerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
