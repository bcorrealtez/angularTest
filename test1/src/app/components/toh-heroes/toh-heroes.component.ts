import { Component, OnInit } from "@angular/core";

import { Hero } from "../toh-hero";
import { TohHeroService } from "../toh-hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-toh-heroes",
  templateUrl: "./toh-heroes.component.html",
  styleUrls: ["./toh-heroes.component.css"],
})
export class TohHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: TohHeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
}
