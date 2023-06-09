import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
  data$ = this.movieApiService.get()
  constructor(private readonly movieApiService: MovieApiService) {}

  ngOnInit(): void {
  }
}
