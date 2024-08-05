import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { TimerPaneComponent } from '../timer-pane/timer-pane.component';
import { Subscription } from 'rxjs';
import { ControlService } from '../api/control.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';

@Component({
  selector: 'app-pop-up-timer',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  templateUrl: './pop-up-timer.component.html',
  styleUrl: './pop-up-timer.component.css'
})
export class PopUpTimerComponent implements OnInit{
  ngOnInit(): void {
   this.recibirId(this.id)

  }
  id:any;
  recibirId(id:any) {
    this.id = id;
    console.log(this.id)
  }

}
