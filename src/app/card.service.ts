import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import PokemonPageData from './interfaces/PokemonPageData';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }
  baseUrl: string = "https://api.pokemontcg.io/v2/cards";

  getAllCards(queryString: string): Observable<PokemonPageData> {
    return this.http.get<PokemonPageData>(`${this.baseUrl}${queryString}`)
      .pipe(
        map((result) => {
          console.log(result, "result");
          return result;
        })
      )
  }
}
