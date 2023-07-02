import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ButtonComponent } from '../../shared/button/button.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent, ButtonComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should display the user name correctly', () => {
		const userNameElement: HTMLElement = fixture.nativeElement.querySelector(
			'span'
		);
		expect(userNameElement.textContent).toContain(component.userName.firstName);
	});
});
