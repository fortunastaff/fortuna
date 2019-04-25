import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RankComponent } from './components/heroes/rank.component';
import { TabsPage } from './pages/tabs/tabs.page';


const app_routes: Routes = [

    { path: '' , loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {  path: 'details', loadChildren: './pages/details/details.module#TabsPageModule'},
    { path: 'heroes', component: HeroesComponent},
    { path: 'rank/:id', component: RankComponent}
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
