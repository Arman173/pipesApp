import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Armando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Armando', 'Mateo', 'Erick', 'Zeus'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = this.nombre === 'Armando' ? 'Sofia' : 'Armando';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Armando',
    edad: 19,
    direccion: 'Cancun, Mexico'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Peter Parker',
      alias: 'Spider-Man',
      vuela: false
    },
    {
      nombre: 'Tony Stark',
      alias: 'Iron-Man',
      vuela: true
    },
    {
      nombre: 'Steve Rogers',
      alias: 'Capitan America',
      vuela: false
    },
    {
      nombre: 'Stephen Strange',
      alias: 'Doctor Strange',
      vuela: true
    }
  ]

}
