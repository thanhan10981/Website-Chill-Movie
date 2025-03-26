import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';



@Component({
  selector: 'app-root',
  imports: [CategoryComponent, NewMoviesComponent, MoviesDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-web';
}
