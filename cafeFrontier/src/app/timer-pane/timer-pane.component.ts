import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { TimerService } from '../api/timer.service';
import { ControlService } from '../api/control.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';

@Component({
  selector: 'app-timer-pane',
  templateUrl: './timer-pane.component.html',
  styleUrls: ['./timer-pane.component.css']
})
export class TimerPaneComponent implements OnInit, OnDestroy {
  
  countdownConfigs = {};

  users: Usuarios[] = [];
 @Input() userId:number;

  countdownConfig = { leftTime: 1200, demand: true };
  private startSubscription: Subscription;

  constructor(private countdownService: ControlService,private user:UsuariossService) {}

  ngOnInit() {

    this.user.findAll().subscribe((data) => {
      this.users = data;
      this.users.forEach(user => {
        this.countdownConfigs[this.userId] = { leftTime: 1200, demand: true };
  
        const subscription = this.countdownService.countdowns$.subscribe(countdowns => {
          if (countdowns[this.userId]) {
         
            this.countdownConfigs[this.userId].demand = false;
            
          }
        });
        
        this.countdownService.countdownSubscriptions.push(subscription);
      });
     
    });


   
  }

  ngOnDestroy() {
   
  }

  handleEvent(event, userId: number) {
    if (event.action === 'done') {
      console.log(`Countdown for user ${userId} finished!`);
    }
  }

}
