import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import SortItem from '../interfaces/SortItem';
import CardsSearchEvent from '../interfaces/CardSearchEvent';
import { sortOptionsArr } from '../utils/constants';

@Component({
  selector: 'app-search-container-layout',
  templateUrl: './search-container-layout.component.html',
  styleUrls: ['./search-container-layout.component.scss']
})
export class SearchContainerLayoutComponent implements OnInit {
  searchText: string = "";
  orderByName: SortItem = { ...sortOptionsArr[0] };
  orderByNumber: SortItem = { ...sortOptionsArr[0] };
  sortOptions: SortItem[] = [...sortOptionsArr];
  originalPokemon: boolean = false;

  @Output() newSearchEvent = new EventEmitter<CardsSearchEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  trackBySortItem(index: number, item: SortItem) {
    return item.id;
  }

  compareFn(a: SortItem, b: SortItem) {
    return a?.id === b?.id;
  }

  searchCards(): void {
    this.newSearchEvent.emit({
      text: this.searchText,
      orderByNumber: this.orderByNumber.value,
      orderByName: this.orderByName.value,
      originalPokemon: this.originalPokemon
    })
  }
}
