import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../toh-hero';
import { TohHeroService } from '../toh-hero.service';

@Component({
  selector: 'app-toh-detail',
  templateUrl: './toh-detail.component.html',
  styleUrls: ['./toh-detail.component.css'],
})
export class TohDetailComponent implements OnInit {
  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: TohHeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack);
    }
  }
}
