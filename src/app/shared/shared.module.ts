import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { DurationPipePipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightCreationDateDirective } from './directives/highlight-creation-date.directive';

@NgModule({
	declarations: [
		ButtonComponent,
		InputComponent,
		DurationPipePipe,
		FilterPipe,
		OrderByPipe,
		HighlightCreationDateDirective,
	],
	imports: [CommonModule, FormsModule],
	exports: [
		ButtonComponent,
		InputComponent,
		DurationPipePipe,
		FilterPipe,
		OrderByPipe,
		HighlightCreationDateDirective,
	],
})
export class SharedModule {}
