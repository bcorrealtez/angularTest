import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohDetailComponent } from './toh-detail.component';

describe('TohDetailComponent', () => {
  let component: TohDetailComponent;
  let fixture: ComponentFixture<TohDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
