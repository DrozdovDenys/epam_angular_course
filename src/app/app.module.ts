import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { MainComponent } from './components/main/main.component';
import { SearchBarComponent } from './components/main/search-bar/search-bar.component';
import { CourseCardComponent } from './components/main/course-card/course-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BreadCrumbsComponent,
		MainComponent,
		SearchBarComponent,
		CourseCardComponent,
		FooterComponent,
		LogoComponent,
		ButtonComponent,
		InputComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
