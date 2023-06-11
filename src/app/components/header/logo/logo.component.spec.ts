import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
	let component: LogoComponent;
	let fixture: ComponentFixture<LogoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogoComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should render the logo and title correctly', () => {
		const logoElement: HTMLImageElement = fixture.nativeElement.querySelector(
			'img'
		);
		const titleElement: HTMLElement = fixture.nativeElement.querySelector(
			'span'
		);

		expect(logoElement).toBeTruthy();
		expect(logoElement.src).toMatch(/\/assets\/logo\.jpg$/);
		expect(logoElement.alt).toBe('logo');
		expect(logoElement.width).toBe(30);

		expect(titleElement).toBeTruthy();
		expect(titleElement.textContent).toContain('VIDEO COURSE');
	});
});
