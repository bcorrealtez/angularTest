import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohDashboardComponent } from './toh-dashboard.component';

describe('TohDashboardComponent', () => {
  let component: TohDashboardComponent;
  let fixture: ComponentFixture<TohDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
