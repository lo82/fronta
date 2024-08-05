import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimercontrolComponent } from './timercontrol.component';

describe('TimercontrolComponent', () => {
  let component: TimercontrolComponent;
  let fixture: ComponentFixture<TimercontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimercontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimercontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
