import { TestBed } from '@angular/core/testing';

import { TohHeroService } from './toh-hero.service';

describe('TohHeroService', () => {
  let service: TohHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TohHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
