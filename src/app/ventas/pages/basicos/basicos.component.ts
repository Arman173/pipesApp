import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  lowercaseName: string = 'armando';
  uppercaseName: string = 'ARMANDO';
  allName: string = 'arMaNdO cAnUL';

  date: Date = new Date(); // el dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
