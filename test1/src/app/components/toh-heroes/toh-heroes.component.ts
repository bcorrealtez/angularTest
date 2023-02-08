import { Component } from '@angular/core';

import { Hero } from "../toh-hero";

@Component({
  selector: 'app-toh-heroes',
  templateUrl: './toh-heroes.component.html',
  styleUrls: ['./toh-heroes.component.css']
})
export class TohHeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}
