import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './main/search-bar/search-bar.component';
import { CourseCardComponent } from './main/course-card/course-card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LogoComponent } from './header/logo/logo.component';

@NgModule({
	declarations: [
		HeaderComponent,
		LogoComponent,
		BreadCrumbsComponent,
		MainComponent,
		SearchBarComponent,
		CourseCardComponent,
		FooterComponent,
	],
	exports: [
		HeaderComponent,
		LogoComponent,
		BreadCrumbsComponent,
		MainComponent,
		SearchBarComponent,
		CourseCardComponent,
		FooterComponent,
	],
	imports: [CommonModule, FormsModule, SharedModule],
})
export class ComponentsModule {}
