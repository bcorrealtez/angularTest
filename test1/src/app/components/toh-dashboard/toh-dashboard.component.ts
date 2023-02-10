import { Component, OnInit } from "@angular/core";

import { Hero } from "../toh-hero";
import { TohHeroService } from "../toh-hero.service";

@Component({
  selector: "app-toh-dashboard",
  templateUrl: "./toh-dashboard.component.html",
  styleUrls: ["./toh-dashboard.component.css"],
})
export class TohDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: TohHeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
