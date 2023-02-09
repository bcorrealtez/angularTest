import { Component } from '@angular/core';

import { Hero } from "../toh-hero";
import { TohHeroService } from "../toh-hero.service";

@Component({
  selector: 'app-toh-heroes',
  templateUrl: './toh-heroes.component.html',
  styleUrls: ['./toh-heroes.component.css']
})
export class TohHeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService: TohHeroService) {
    this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}
