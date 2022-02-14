import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'arManDo caNul';
  numero: number = 1000;
  obj = {
    nombre: 'Armando'
  }

  constructor(
    private primeNgConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
      this.primeNgConfig.ripple = true;
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.numero );
    console.log( this.obj );
  }

}
