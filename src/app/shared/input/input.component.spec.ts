import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
	let component: InputComponent;
	let fixture: ComponentFixture<InputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should bind the placeholder correctly', () => {
		const placeholder = 'Enter a value';
		component.placeholder = placeholder;
		fixture.detectChanges();
		const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(
			'input'
		);
		expect(inputElement.placeholder).toBe(placeholder);
	});

	it('should bind the type correctly', () => {
		const type = 'text';
		component.type = type;
		fixture.detectChanges();
		const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(
			'input'
		);
		expect(inputElement.type).toBe(type);
	});

	it('should bind the value correctly', () => {
		const value = 'Hello';
		component.value = value;
		fixture.detectChanges();
		const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(
			'input'
		);
		expect(inputElement.value).toBe(value);
	});
});
