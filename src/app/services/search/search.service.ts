import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c0ae654b6a3445cf8b4e0fea42008718&query=${query}&number=12`;

    return this.http.get(apiUrl);
  }
}
