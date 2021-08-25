import { Component } from '@angular/core';
import CardSearchEvent from './interfaces/CardSearchEvent';
import { CardService } from './card.service';
import { trasnformFiltersIntoQueryString } from './utils/index'
import PokemonPageData from './interfaces/PokemonPageData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-io-intro';
  pokemonCardPage: PokemonPageData | null = null;

  constructor(private cardService: CardService) { }

  handleCardSearchEvent(searchConfig: CardSearchEvent) {
    const queryString = trasnformFiltersIntoQueryString(searchConfig);
    this.cardService.getAllCards(queryString).subscribe((cards) => this.pokemonCardPage = cards);
  }
}
