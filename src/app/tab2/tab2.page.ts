import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Input()  binario1!: string;
  @Input()  binario2!: string;
  conversionentero1;
  conversionentero2;
  sumaenteros;
  restaenteros;
  sumabinarios;
  restabinarios;

  constructor() {}

  operacion(){
    this.conversionentero1 = parseInt(this.binario1, 2).toFixed(0);
    this.conversionentero2 = parseInt(this.binario2, 2).toFixed(0);

    this.sumaenteros = parseFloat(this.conversionentero1)+parseFloat(this.conversionentero2);
    this.sumabinarios = Number(this.sumaenteros).toString(2);

    this.restaenteros = parseFloat(this.conversionentero1)-parseFloat(this.conversionentero2);
    this.restabinarios = Number(this.restaenteros).toString(2);

  }

}
