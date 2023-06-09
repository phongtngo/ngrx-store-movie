import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import { topRatedResponse } from "../data/top-rated";
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieApiService {
  private readonly baseUrl = 'https://api.themoviedb.org/3/movie/'
  private readonly topRatedMovies = topRatedResponse;

  constructor(private readonly httpClient: HttpClient) {}

  get() {
    const url = `${this.baseUrl}top_rated`;
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDNjYTg0OTJhN2E4ZWE3ZTA3ODFlZGI0OTFkYjFhYyIsInN1YiI6IjU2N2M5ZDkxOTI1MTQxMzFkZjAwMjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oatuOqcbceGuYBWMYVV6uR7vMGz5AfUyTQcMgY5zRmE' }
    // return this.httpClient.get(this.topRatedUrl, { headers }).pipe(map((response: any) => response.results));

    return of(this.topRatedMovies).pipe(map((response: any) => response.results))
  }

  getDetailById(id: string) {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDNjYTg0OTJhN2E4ZWE3ZTA3ODFlZGI0OTFkYjFhYyIsInN1YiI6IjU2N2M5ZDkxOTI1MTQxMzFkZjAwMjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oatuOqcbceGuYBWMYVV6uR7vMGz5AfUyTQcMgY5zRmE' }
    const url = `${this.baseUrl}${id}`
    return this.httpClient.get(url , { headers });
  }
}
