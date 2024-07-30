/**
 * ========================================================
 * Title: app.module.ts
 * Author: Zadkiel Rodriguez
 * Date: 7/30/2024
 * Description: App module
 * ========================================================
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DatabaseDiagramsComponent } from './database-diagrams/database-diagrams.component';
import { ApiUnitTestComponent } from './api-unit-test/api-unit-test.component';
import { ResumeComponent } from './resume/resume.component';
import { DevopsComponent } from './devops/devops.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    DatabaseDiagramsComponent,
    ApiUnitTestComponent,
    ResumeComponent,
    DevopsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
