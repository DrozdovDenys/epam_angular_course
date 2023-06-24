import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	@Input() searchInput: string;
	@Output() searchInputChange: EventEmitter<string> = new EventEmitter<
		string
	>();

	emitsearchInput() {
		this.searchInputChange.emit(this.searchInput);
		console.log(this.searchInput);
	}
}
