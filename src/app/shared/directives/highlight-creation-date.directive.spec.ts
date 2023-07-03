import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightCreationDateDirective } from './highlight-creation-date.directive';

@Component({
	template: `
		<div [appHighlightCreationDate]="date" id="targetElement"></div>
	`,
})
class TestComponent {
	date: Date | undefined;
}

describe('HighlightCreationDateDirective', () => {
	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HighlightCreationDateDirective, TestComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('should add "border-green-400" class when date is within 14 days from now', () => {
		const currentDate = new Date();
		const dateWithin14Days = new Date(
			currentDate.getTime() - 10 * 24 * 60 * 60 * 1000
		); // 10 days ago
		component.date = dateWithin14Days;
		fixture.detectChanges();

		const targetElement = fixture.nativeElement.querySelector('#targetElement');
		expect(targetElement.classList).toContain('border-green-400');
	});

	it('should add "border-blue-600" class when date is in the future', () => {
		const currentDate = new Date();
		const futureDate = new Date(
			currentDate.getTime() + 10 * 24 * 60 * 60 * 1000
		); // 10 days in the future
		component.date = futureDate;
		fixture.detectChanges();

		const targetElement = fixture.nativeElement.querySelector('#targetElement');
		expect(targetElement.classList).toContain('border-blue-600');
	});

	it('should not add any classes when date is outside the defined ranges', () => {
		const currentDate = new Date();
		const pastDate = new Date(currentDate.getTime() - 20 * 24 * 60 * 60 * 1000); // 20 days ago
		component.date = pastDate;
		fixture.detectChanges();

		const targetElement = fixture.nativeElement.querySelector('#targetElement');
		expect(targetElement.classList).not.toContain('border-green-400');
		expect(targetElement.classList).not.toContain('border-blue-600');
	});
});
