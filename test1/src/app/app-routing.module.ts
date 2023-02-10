import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TohDashboardComponent } from "./components/toh-dashboard/toh-dashboard.component";
import { TohHeroesComponent } from "./components/toh-heroes/toh-heroes.component";
import { TohDetailComponent } from "./components/toh-detail/toh-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: TohDashboardComponent },
  { path: "heroes", component: TohHeroesComponent },
  { path: "detail/:id", component: TohDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
