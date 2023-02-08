import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohHeroesComponent } from './toh-heroes.component';

describe('TohHeroesComponent', () => {
  let component: TohHeroesComponent;
  let fixture: ComponentFixture<TohHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
