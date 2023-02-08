import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TohDashboardComponent } from './components/toh-dashboard/toh-dashboard.component';
import { TohHeroesComponent } from './components/toh-heroes/toh-heroes.component';

const routes: Routes = [
  {path: 'dashboard', component: TohDashboardComponent},
  {path: 'heroes', component: TohHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
