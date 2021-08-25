import { Component, OnInit, Input } from '@angular/core';
import PokemonCard from '../interfaces/PokemonCard';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor() { }
  @Input() pokemonInfo: PokemonCard | null = null;

  ngOnInit(): void {
  }
}
