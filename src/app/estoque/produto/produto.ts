import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {
  tamanho = 20;
  fonte = this.tamanho + 'px';

  produtos = [
    {nome:"Notebook",preco:2500,estoque:5},
    {nome:"Mouse",preco:500,estoque:0},
    {nome:"Teclado",preco:2100,estoque:10},
    {nome:"Monitor",preco:800,estoque:3}
  ]

  aumentarValor = () => {
    for (let produto of this.produtos) {
      produto.preco = produto.preco + (produto.preco * 0.1);
    }
  }
  diminuirValor = () => {
    for (let produto of this.produtos) {
      produto.preco = produto.preco - (produto.preco * 0.1);
    }
  }
}
