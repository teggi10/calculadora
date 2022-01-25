import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  resultado:number ;
  error:string;
  mostrarResultado(resultado:number){
    this.resultado = resultado;
  }
  mostrarError(error:string){
    this.error = error;
  }
}
