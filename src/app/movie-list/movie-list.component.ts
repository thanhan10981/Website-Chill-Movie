import { Component } from '@angular/core';
import { MoviedetailPopupComponent } from '../moviedetail-popup/moviedetail-popup.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviedetailPopupComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

}
