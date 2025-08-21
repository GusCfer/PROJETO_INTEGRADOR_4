import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastrar } from './cadastrar/cadastrar';
import { Somar } from '../contador/somar/somar';

const routes: Routes = [

  {
    path: 'cadastro',
    component: Cadastrar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
