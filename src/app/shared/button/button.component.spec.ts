import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ButtonComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit onclick event when clicked', () => {
		spyOn(component.onclick, 'emit');
		const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector(
			'button'
		);
		buttonElement.click();
		expect(component.onclick.emit).toHaveBeenCalled();
	});
});
