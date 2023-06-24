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

	it('should render the header', () => {
		const headerElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-header'
		);
		expect(headerElement).toBeTruthy();
	});

	it('shoud render the logo', () => {
		const logoElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-logo'
		);
		expect(logoElement).toBeTruthy();
	});
	it('shoud render the breadcrumbs', () => {
		const breadcrumbsElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-bread-crumbs'
		);
		expect(breadcrumbsElement).toBeTruthy();
	});
	it('shoud render the main', () => {
		const mainElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-main'
		);
		expect(mainElement).toBeTruthy();
	});
	it('shoud render the footer', () => {
		const footerElement: HTMLElement = fixture.nativeElement.querySelector(
			'app-footer'
		);
		expect(footerElement).toBeTruthy();
	});

	
});
