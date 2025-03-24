import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRankingMovieComponent } from './list-ranking-movie.component';

describe('ListRankingMovieComponent', () => {
  let component: ListRankingMovieComponent;
  let fixture: ComponentFixture<ListRankingMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRankingMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRankingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
