import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { HeroesComponent } from './components/heroes/heroes.component';
import { RankComponent } from './components/heroes/rank.component';
import {TabsPage} from './pages/tabs/tabs.page';

const app_routes: Routes = [
    { path: 'heroes', component: HeroesComponent},
    
    { path: 'rank/:id', component: RankComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
