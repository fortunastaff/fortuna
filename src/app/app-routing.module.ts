import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { RankComponent } from './components/heroes/rank.component';
import { TabsPageModule } from './pages/tabs/tabs.module';

const app_routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module' },
  { path: 'heroes', component: HeroesComponent, loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'rank/:id', component: RankComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
