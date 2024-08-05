import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './prueba.component.css',
  template: `
    <div #app>
      <!-- contenido dinámico -->
    </div>
  `,
})
export class PruebaComponent {
  isDisabled = true;
  TIEMPO:any = 10;
  dealers = [
    {
      id: 1,
      time: "8:00",
      status: "Disponible",
    },
    {
      id: 2,
      time: "8:30",
      status: "Disponible",
    },
    {
      id: 3,
      time: "9:00",
      status: "Disponible",
    },
    {
      id: 4,
      time: "9:30",
      status: "Disponible",
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.dealers.forEach((dealer) => {
      const template = `
        <div id="dealerContainer${dealer.id}" class="riders-panel">
          <div class="container">
            <h3>${dealer.time}</h3>
          </div>

          <div class="container">
            <p>#${dealer.id}</p>
          </div>
          
          <div class="container">
            <button class="btn active" 
            [attr.disabled]="isDisabled"
                    [attr.dealer-id]="dealer.id"
                    (click)="handleClick($event)"
            >{{ dealer.status }}</button>
          </div>
        </div>
      `;
      this.elementRef.nativeElement.innerHTML += template;
    });

    setInterval(() => {
      this.dealers.forEach((dealer:any, i) => {
        if (dealer.time!= null) {
          const element = document.getElementById(`dealerContainer${dealer.id}`);
          console.log(dealer.id + ':', dealer.time);

          const mins = Math.floor(dealer.time / 60);
          const remSec = dealer.time % 60;

          const h3 = element.querySelector('h3');
          h3.innerHTML = `Disponible en: ${String(mins).padStart(2, '0')}:${String(remSec).padStart(2, '0')} minutos`;

          if (dealer.timer > 0) {
            dealer.timer--;
          } else {
            alert('El tiempo ha terminado');
            dealer.timer = null;
            h3.innerHTML = dealer.time;
            
            const btn = element.querySelector('.btn');
            this.isDisabled = false;
       
            btn.classList.remove('disabled');
            btn.innerHTML = 'Disponible';
            this.dealers[i].time = null;
            console.log(`El boton ha sido activado`);
          }
        }
      });
    }, 1000);
  }

  handleClick(event: any) {
    const dealerId = event.target.attributes.getNamedItem('dealer-id').value;
    console.log('handleClick', dealerId);
    if (!event.target.parentNode.parentNode.classList.contains('disabled')) {
      event.target.parentNode.parentNode.classList.add('disabled');
      event.target.classList.add('disabled');
      event.target.innerHTML = 'Ocupado';
      if (!event.target.disabled) {
        event.target.disabled = true;
        this.dealers.forEach((d) => {
          if (d.id == dealerId) {
            d.time =this.TIEMPO;
          }
        });
      }
      console.log(`El boton ha sido desactivado`);
    }
  }
}


  
