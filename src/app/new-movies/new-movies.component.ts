import { Component } from '@angular/core';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';

@Component({
  selector: 'app-new-movies',
  imports: [MoviesDetailComponent],
  templateUrl: './new-movies.component.html',
  styleUrl: './new-movies.component.css'
})
export class NewMoviesComponent {

}
