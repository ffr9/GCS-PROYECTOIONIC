import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'creacionevento',
        loadChildren: () => import('../creacionevento/creacionevento.module').then(m => m.CreacioneventoPageModule)
      },
      {
        path: 'busquedaeventos',
        loadChildren: () => import('../busquedaeventos/busquedaeventos.module').then(m => m.BusquedaeventosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('../evento/evento.module').then(m => m.EventoPageModule)
      },
      {
        path: 'recompensas',
        loadChildren: () => import('../recompensas/recompensas.module').then(m => m.RecompensasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/perfil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/perfil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
