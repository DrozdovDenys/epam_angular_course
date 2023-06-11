import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should render the header, logo, breadcrumbs, main, and footer components', () => {
		const headerElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-header'
		);
		const logoElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-logo'
		);
		const breadcrumbsElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-bread-crumbs'
		);
		const mainElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-main'
		);
		const footerElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-footer'
		);

		expect(headerElement).toBeTruthy();
		expect(logoElement).toBeTruthy();
		expect(breadcrumbsElement).toBeTruthy();
		expect(mainElement).toBeTruthy();
		expect(footerElement).toBeTruthy();
	});
});
