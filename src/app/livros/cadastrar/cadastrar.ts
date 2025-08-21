import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  nome = 'Gustavo de Carvalho';
  caminhoImagem = 'https://br.freepik.com/vetores-gratis/empresario-procura-novos-negocios-com-binoculo_13923495.htm#fromView=keyword&page=1&position=4&uuid=930f0825-4498-40b0-985b-973f47dd8cf4&query=Svg+Criador+Caminhos';

  dizerOi = () => {
    this.nome = 'Livro Comprado'
  }

}