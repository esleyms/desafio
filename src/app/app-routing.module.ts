import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitsmartComponent } from './citsmart/citsmart.component';
import { VisualizarDadosComponent } from './citsmart/modal/visualizar-dados/visualizar-dados.component';

const routes: Routes = [
  {
    path: 'citsmart',
    component: CitsmartComponent,
  },
  {
    path: 'visualizar-dados',
    component: VisualizarDadosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
