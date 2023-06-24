import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadCrumbsComponent } from './bread-crumbs.component';

describe('BreadCrumbsComponent', () => {
	let component: BreadCrumbsComponent;
	let fixture: ComponentFixture<BreadCrumbsComponent>;
	let breadcrumbsElement: HTMLElement;
	let anchorElement: HTMLAnchorElement | null;

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

	beforeEach(() => {
		breadcrumbsElement = fixture.nativeElement.querySelector('ul');
		anchorElement = breadcrumbsElement.querySelector('a');
	});

	it('should render the breadcrumbs correctly', () => {
		expect(breadcrumbsElement).toBeTruthy();
	});

	it('should render the anchorElement correctly', () => {
		expect(anchorElement).toBeTruthy();
	});
	it('should contain the path correctly', () => {
		expect(anchorElement?.href).toContain('/course');
	});
	it('should contain the anchorElement correctly', () => {
		expect(anchorElement?.textContent).toBe('Course');
	});
});
