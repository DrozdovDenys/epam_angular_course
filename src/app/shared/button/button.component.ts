import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Output() onclick: EventEmitter<void> = new EventEmitter<void>();

	onClick(): void {
		this.onclick.emit();
	}
}
