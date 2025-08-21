import { Component } from '@angular/core';

@Component({
  selector: 'app-somar',
  standalone: false,
  templateUrl: './somar.html',
  styleUrl: './somar.css'
})
export class Somar {
  valor = 0;

  somar = () => {
    this.valor++;
  }
  subtrair = ()=>{
    if(this.valor > 0 ){
      this.valor--;
    }
  }
}
