import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5bc2abb6dd144f41aa93da15d256aa03&query=${query}&number=18`;

    return this.http.get(apiUrl);
  }
}
