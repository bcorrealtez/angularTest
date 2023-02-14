import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { Hero } from "../toh-hero";
import { TohHeroService } from "../toh-hero.service";

@Component({
  selector: "app-toh-heroes",
  templateUrl: "./toh-heroes.component.html",
  styleUrls: ["./toh-heroes.component.css"],
})
export class TohHeroesComponent implements OnInit {
  heroes: Hero[] = [];
  columnsToDisplay = ["id", "name", "delete"];
  @ViewChild(MatTable) table!: MatTable<Hero>;

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
      this.table.renderRows();
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    this.table.renderRows();
  }
}
