import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoPesquisaPage } from './evento-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: EventoPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoPesquisaPageRoutingModule {}
