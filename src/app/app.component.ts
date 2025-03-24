import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RakingBoardComponent } from './raking-board/raking-board.component';

@Component({
  selector: 'app-root',
  imports: [MovieListComponent, RakingBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CHILLMOVIE';
}
