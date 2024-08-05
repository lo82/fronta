import { Component, OnInit } from '@angular/core';
import { CountdownEvent } from 'ngx-countdown';
import { ControlService } from '../api/control.service';

@Component({
  selector: 'app-time-manager',
  templateUrl: './time-manager.component.html',
  styleUrls: ['./time-manager.component.css']
})
export class TimeManagerComponent implements OnInit {

  constructor(private countdownService:ControlService) { }

  ngOnInit(): void {
  }

}
