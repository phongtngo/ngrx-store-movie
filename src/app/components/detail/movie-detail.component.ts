import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  data$ = this.movieApiService.getDetailById(this.route.snapshot.paramMap.get('id'));

  constructor(private readonly movieApiService: MovieApiService, private route: ActivatedRoute) {}

}
