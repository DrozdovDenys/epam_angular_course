import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

describe('CreateCourseComponent', () => {
	let component: CreateCourseComponent;
	let fixture: ComponentFixture<CreateCourseComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CreateCourseComponent, ButtonComponent],
		});
		fixture = TestBed.createComponent(CreateCourseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
