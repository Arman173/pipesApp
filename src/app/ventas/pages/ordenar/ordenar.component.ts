import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Shazam',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

}
