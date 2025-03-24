import { Component } from '@angular/core';
import { ListRankingMovieComponent } from '../list-ranking-movie/list-ranking-movie.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-raking-board',
  imports: [ListRankingMovieComponent, CommentComponent],
  templateUrl: './raking-board.component.html',
  styleUrl: './raking-board.component.css'
})
export class RakingBoardComponent {

}
