import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerHandlerComponent } from './answer-handler.component';

describe('AnswerHandlerComponent', () => {
  let component: AnswerHandlerComponent;
  let fixture: ComponentFixture<AnswerHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
