import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadCrumbsComponent } from './bread-crumbs.component';

describe('BreadCrumbsComponent', () => {
	let component: BreadCrumbsComponent;
	let fixture: ComponentFixture<BreadCrumbsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BreadCrumbsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadCrumbsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should render the breadcrumbs correctly', () => {
		const breadcrumbsElement: HTMLElement = fixture.nativeElement.querySelector(
			'ul'
		);
		expect(breadcrumbsElement).toBeTruthy();

		const anchorElement: HTMLAnchorElement | null = breadcrumbsElement.querySelector(
			'a'
		);
		expect(anchorElement).toBeTruthy();

		if (anchorElement) {
			expect(anchorElement.href).toContain('/course');
			expect(anchorElement.textContent).toContain('Course');
		}
	});
});
