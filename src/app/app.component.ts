import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nombre:string = "Capitán América";

  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  persona:object = {
    nombre: 'Beto',
    apellido: 'Ledo',
    profesion: 'Programador'
  };

  promesa = new Promise<string>( (resolve)=>{
    setTimeout( ()=>{
      resolve('Misión Cumplida');
    },2000);
  });

  fecha:Date = new Date();

  idioma:string = 'es';


  toUpper = 'nOrbErtO lEDo';

  videoUrl: string = 'https://www.youtube.com/embed/bm51ihfi1p4';

  pass:string  = '123';
  activar:boolean = true;


}
