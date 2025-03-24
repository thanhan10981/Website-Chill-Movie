import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakingBoardComponent } from './raking-board.component';

describe('RakingBoardComponent', () => {
  let component: RakingBoardComponent;
  let fixture: ComponentFixture<RakingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakingBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RakingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
