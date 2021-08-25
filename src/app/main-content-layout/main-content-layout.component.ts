import { Component, OnInit, Input } from '@angular/core';
import PokemonCard from '../interfaces/PokemonCard';
import PokemonPageData from '../interfaces/PokemonPageData';

@Component({
  selector: 'app-main-content-layout',
  templateUrl: './main-content-layout.component.html',
  styleUrls: ['./main-content-layout.component.scss']
})
export class MainContentLayoutComponent implements OnInit {

  constructor() { }
  @Input() pokemonData: PokemonPageData | null = null;

  ngOnInit(): void {
  }

  trackByFn(index: number, item: PokemonCard) {
    return item?.id;
  }
}
