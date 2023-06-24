import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SearchBarComponent', () => {
	let component: SearchBarComponent;
	let fixture: ComponentFixture<SearchBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SearchBarComponent],
			imports: [FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit the searchInput value on submit', () => {
		const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector(
			'button'
		);
		const searchInput: HTMLInputElement = fixture.nativeElement.querySelector(
			'input'
		);

		spyOn(component, 'emitsearchInput');

		searchInput.value = 'test input value';
		searchInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		submitButton.click();

		expect(component.emitsearchInput).toHaveBeenCalledWith();
		expect(component.searchInput).toBe('test input value');
	});
});
