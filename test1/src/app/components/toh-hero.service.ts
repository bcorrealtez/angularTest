import { Injectable } from '@angular/core';

import { Hero } from "./toh-hero";
import { HEROES } from "./toh-mock-heroes";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TohHeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes
  } 
}
