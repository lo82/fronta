import { Component, Input, OnInit } from '@angular/core';
import { AccionesService } from '../api/acciones.service';

@Component({
  selector: 'app-ventas-diarias',
  templateUrl: './ventas-diarias.component.html',
  styleUrls: ['./ventas-diarias.component.css']
})
export class VentasDiariasComponent implements OnInit {
  @Input() public idd: any;
  constructor(private acciones: AccionesService) { }

  ngOnInit(): void {
    console.log(this.idd)
    this.acciones.chicaportrago(this.idd).subscribe()
  }

}
