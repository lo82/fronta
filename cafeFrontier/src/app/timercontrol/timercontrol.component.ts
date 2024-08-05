import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimerService } from '../api/timer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timercontrol',
  templateUrl: './timercontrol.component.html',
  styleUrls: ['./timercontrol.component.css']
})
export class TimercontrolComponent implements OnInit {

  @Input() userId!: number;
  remainingTime$: Observable<string> = new Observable<string>();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  
  }

  startTimer(durationMinutes: number): void {
    this.timerService.startTimer(this.userId, durationMinutes);
    this.remainingTime$ = this.timerService.getTimeRemaining(this.userId);
  }

  stopTimer(): void {
    this.timerService.stopTimer(this.userId);
  }


}
