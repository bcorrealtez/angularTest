import { Component, Input } from '@angular/core';

import { Hero } from "../toh-hero";

@Component({
  selector: 'app-toh-detail',
  templateUrl: './toh-detail.component.html',
  styleUrls: ['./toh-detail.component.css']
})
export class TohDetailComponent {
  @Input()  hero?: Hero;
}
