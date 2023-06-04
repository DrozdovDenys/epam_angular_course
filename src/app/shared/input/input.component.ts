import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent {
	@Input() placeholder: string;
	@Input() type: string;
	@Input() searchBtn: boolean;
	value: string;

	handleSearch(value: string): void {
		console.log(value);
	}
}
