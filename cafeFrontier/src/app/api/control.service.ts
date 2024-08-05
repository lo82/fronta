import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, tap, BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { horario } from '../class/horario';


@Injectable({
  providedIn: 'root'
})
export class ControlService {
  i:number
 countdownSubscriptions: Subscription[] = [];
  /*
  private startCountdownSource = new BehaviorSubject<boolean>(false);
  startCountdown$ = this.startCountdownSource.asObservable();

  startCountdown() {
    this.startCountdownSource.next(true);
  }

  resetCountdown() {
    this.startCountdownSource.next(false);
  }
  */

  private countdownsSource = new BehaviorSubject<{ [key: number]: boolean }>({});
  countdowns$ = this.countdownsSource.asObservable();

  startCountdown(userId) {
    const countdowns = this.countdownsSource.value;
    countdowns[userId] = true;
    this.countdownsSource.next(countdowns);
  }

  resetCountdown(userId: number) {
    const countdowns = this.countdownsSource.value;
    countdowns[userId] = false;
    this.countdownsSource.next(countdowns);
  }


/*postCrear(data: Control) {
    return this.http
      .post<Control>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }
*/

}