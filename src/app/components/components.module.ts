import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header/header.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './main/search-bar/search-bar.component';
import { CourseCardComponent } from './main/course-card/course-card.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

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
    ],
    exports: [
        AppComponent,
        HeaderComponent,
        BreadCrumbsComponent,
        MainComponent,
        SearchBarComponent,
        CourseCardComponent,
        FooterComponent,
        LogoComponent,
    ],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class ComponentsModule {}
