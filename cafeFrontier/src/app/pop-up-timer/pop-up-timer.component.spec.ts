import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTimerComponent } from './pop-up-timer.component';

describe('PopUpTimerComponent', () => {
  let component: PopUpTimerComponent;
  let fixture: ComponentFixture<PopUpTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
