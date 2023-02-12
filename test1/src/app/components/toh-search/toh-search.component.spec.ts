import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohSearchComponent } from './toh-search.component';

describe('TohSearchComponent', () => {
  let component: TohSearchComponent;
  let fixture: ComponentFixture<TohSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
