import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailPopupComponent } from './moviedetail-popup.component';

describe('MoviedetailPopupComponent', () => {
  let component: MoviedetailPopupComponent;
  let fixture: ComponentFixture<MoviedetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviedetailPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
