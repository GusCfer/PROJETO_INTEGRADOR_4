import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  tamanho = 20;
  fonte = this.tamanho + 'px';

  alunos = [
    {id:1,nome:"Gustavo",status:true},
    {id:2,nome:"Vitori",status:false},
    {id:3,nome:"Rodolfo",status:true},
    {id:4,nome:"Rafael",status:false},
    {id:5,nome:"Prado",status:false},
    {id:6,nome:"Carvalho",status:true}

  ]
  exibirDetalhes = true;

  alterarVisualizacao = () => {
    this.exibirDetalhes = !this.exibirDetalhes;
  }

  alterarStatus = () => {
    for (let aluno of this.alunos) {
      aluno.status = aluno.status === true ? false :true;
    }
  }
   aumentarFonte = () => {
    this.tamanho++;
    this.fonte = this.tamanho + 'px';
  }

  diminuirFonte = () => {
    this.tamanho--;
    this.fonte = this.tamanho + 'px';
  }
  }

