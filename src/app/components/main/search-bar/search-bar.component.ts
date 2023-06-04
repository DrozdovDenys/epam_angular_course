import { Component } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	value: string;

	handleClick(value: string): void {
		console.log(value);
	}
}
