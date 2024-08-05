import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Timer {
  userId: number;
  endTime: number;
  interval: any;
  remainingTime$: BehaviorSubject<string>;
}


@Injectable({
  providedIn: 'root'
})
export class TimerService {
 /* private timers = new Map<string, BehaviorSubject<number>>();
  private countDownTimerRef:any;
  public minutes:BehaviorSubject<number> = new BehaviorSubject(0);
  public seconds:BehaviorSubject<number> = new BehaviorSubject(0);
  userTimers = new Map<number, any>();
  createTimer(userId: string) {
    if (!this.timers.has(userId)) {
      this.timers.set(userId, new BehaviorSubject<number>(0));
    }
    return this.timers.get(userId);
  }

  updateTimer(userId: any, seconds: number) {
    const timer = this.timers.get(userId);
    if (timer) {
      timer.next(seconds);
    }
  }

  deleteTimer(userId: string) {
    this.timers.delete(userId);
  }

  startTimer(duration:number):void{
    let userId=3;

      this.minutes[userId] = new BehaviorSubject(0);
      this.seconds[userId] = new BehaviorSubject(0);
    console.log(this.minutes)

    let timer =duration * 60;
    this.countDownTimerRef= setInterval(()=>{
      this.minutes.next(Math.floor(timer/60));
      this.seconds.next(timer%60);
      if(--timer<0){
        clearInterval(this.countDownTimerRef);
      }
    },1000);

  }

  clearTimer():void{
    if(this.countDownTimerRef){
      clearInterval(this.countDownTimerRef);
    }
  }

  
  startTimers(userId: number, duration: number): void {


// Create a map to store the timers for each user


// Initialize the timer for the current user
this.userTimers.set(userId, {
  minutes: new BehaviorSubject(0),
  seconds: new BehaviorSubject(0),
  timerRef: null
});

console.log(this.userTimers.get(userId));

 duration = 10; // example duration in minutes
let timer = duration * 60;

this.userTimers.get(userId).timerRef = setInterval(() => {
  this.userTimers.get(userId).minutes.next(Math.floor(timer / 60));
  this.userTimers.get(userId).seconds.next(timer % 60);
  if (--timer < 0) {
    clearInterval(this.userTimers.get(userId).timerRef);
  }
}, 1000);
  }

  clearTimers(userId: number): void {
    if (this.timers[userId]) {
      clearInterval(this.timers[userId]);
    }
  }

 */
  private timers: Map<number, Timer> = new Map<number, Timer>();

  startTimer(userId: number, durationMinutes: number): void {
    const currentTime = Date.now();
    const endTime = currentTime + durationMinutes * 60 * 1000;

    if (this.timers.has(userId)) {
      clearInterval(this.timers.get(userId)!.interval);
    }

    const remainingTime$ = new BehaviorSubject<string>(this.formatTime(endTime - currentTime));
    const interval = setInterval(() => {
      this.checkTimer(userId);
    }, 1000);

    this.timers.set(userId, { userId, endTime, interval, remainingTime$ });

    console.log(`Timer started for user ${userId}. Ends at ${new Date(endTime).toLocaleTimeString()}.`);
  }

  private checkTimer(userId: number): void {
    const timer = this.timers.get(userId);
    if (!timer) {
      return;
    }

    const remainingTime = timer.endTime - Date.now();
    if (remainingTime <= 0) {
      clearInterval(timer.interval);
      this.timers.delete(userId);
      timer.remainingTime$.next('00:00');
      console.log(`Timer ended for user ${userId}.`);
    } else {
      timer.remainingTime$.next(this.formatTime(remainingTime));
    }
  }

  stopTimer(userId: number): void {
    const timer = this.timers.get(userId);
    if (timer) {
      clearInterval(timer.interval);
      this.timers.delete(userId);
      timer.remainingTime$.next('00:00');
      console.log(`Timer stopped for user ${userId}.`);
    }
  }

  getTimeRemaining(userId: number): BehaviorSubject<string> {
    const timer = this.timers.get(userId);

      return timer.remainingTime$;

  }

  private formatTime(milliseconds: number): string {
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  } 
}
