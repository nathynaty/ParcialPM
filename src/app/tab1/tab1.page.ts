import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @Input()  entero!: string;
  @Input()  decimal!: string;
  @Input()  octal!: string;
  @Input()  binario!: string;
  @Input()  hexadecimal!: string;


  constructor() {
  }

  updateValue(type){
    if(type === 'entero'){
      this.decimal = parseFloat(this.entero).toFixed(2);
      this.binario = Number(this.entero).toString(2);
      this.octal = Number(this.entero).toString(8);
      this.hexadecimal = Number(this.entero).toString(16);
    }
    else if(type === 'decimal'){
      this.entero = parseFloat(this.decimal).toFixed(0);
      this.binario = Number(this.entero).toString(2);
      this.octal = Number(this.entero).toString(8);
      this.hexadecimal = Number(this.entero).toString(16);
    }
    else if(type === 'binario'){
      this.decimal = parseInt(this.binario,2).toFixed(2);
      this.entero = parseInt(this.binario, 2).toFixed(0);
      this.octal = Number(this.binario).toString(8);
      this.hexadecimal = Number(this.binario).toString(16);
    }
    else if(type === 'octal'){
      this.decimal = parseInt(this.octal, 8).toFixed(2);
      this.entero = parseInt(this.octal, 8).toFixed(0);
      this.binario = Number(this.entero).toString(8);
      this.hexadecimal = Number(this.entero).toString(16);
    }
    else if(type === 'hexadecimal'){
      this.decimal = parseInt(this.hexadecimal, 16).toFixed(2);
      this.entero = parseInt(this.hexadecimal,16).toFixed(0);
      this.binario = Number(this.entero).toString(2);
      this.octal = Number(this.entero).toString(8);
    }
  }

}
