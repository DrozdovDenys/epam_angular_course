import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should render the copyright text', () => {
		const copyrightElement: HTMLElement = fixture.nativeElement.querySelector(
			'p'
		);

		expect(component).toBeTruthy();
		expect(copyrightElement).toBeTruthy();
		expect(copyrightElement.textContent).toContain('Copyright');
	});
});
