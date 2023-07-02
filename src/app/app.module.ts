import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from "./shared/shared.module";
import { CreateCourseComponent } from './pages/create-course/create-course.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, CreateCourseComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ComponentsModule, SharedModule]
})
export class AppModule {}
