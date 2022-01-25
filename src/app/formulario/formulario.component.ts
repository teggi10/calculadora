import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() resultado = new EventEmitter<number>();
  @Output() error = new EventEmitter<string>();
  aInput: number ;
  bInput: number ;

  sumar():void {
    let resul = this.aInput + this.bInput;
    this.resultado.emit(resul);
  }
  restar():void {
    let resul = this.aInput - this.bInput;
    this.resultado.emit(resul);
  }
  multiplicar():void {
    let resul = this.aInput * this.bInput;
    this.resultado.emit(resul);
  }
  dividir():void {
    if (this.bInput != 0){
    let resul = this.aInput / this.bInput;
    this.resultado.emit(resul);
    this.error.emit("");
  }
    else{
      this.error.emit("El operando B debe ser distinto de 0");
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
