import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TohDashboardComponent } from './components/toh-dashboard/toh-dashboard.component';
import { TohHeroesComponent } from './components/toh-heroes/toh-heroes.component';
import { TohDetailComponent } from './components/toh-detail/toh-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TohDashboardComponent,
    TohHeroesComponent,
    TohDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
