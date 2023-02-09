import { Component } from '@angular/core';

import { Hero } from "../toh-hero";
import { HEROES } from "../toh-mock-heroes";

@Component({
  selector: 'app-toh-heroes',
  templateUrl: './toh-heroes.component.html',
  styleUrls: ['./toh-heroes.component.css']
})
export class TohHeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
