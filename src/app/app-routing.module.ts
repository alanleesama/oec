import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { IdentificacaoComponent } from './component/identificacao/identificacao.component';

const routes: Routes = [
  { path: '', component:  InicioComponent},
  { path: 'inicio', component:  InicioComponent},
  { path: 'identificacao', component:  IdentificacaoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
