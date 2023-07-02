import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() buttonClasses: string;
	@Output() onclick: EventEmitter<void> = new EventEmitter<void>();

	onClick(): void {
		this.onclick.emit();
	}
}
