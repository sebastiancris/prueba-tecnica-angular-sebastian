import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  filterCriteria = {
    name: '',
    genre: '',
    platform: ''
  };

  onFilterChange(): void {
    this.filterChanged.emit(this.filterCriteria);
  }
}
