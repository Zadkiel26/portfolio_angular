/**
 * ========================================================
 * Title: app-routing.module.ts
 * Author: Zadkiel Rodriguez
 * Date: 7/30/2024
 * Description: App routing module
 * ========================================================
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DatabaseDiagramsComponent } from './database-diagrams/database-diagrams.component';
import { ApiUnitTestComponent } from './api-unit-test/api-unit-test.component';
import { ResumeComponent } from './resume/resume.component';
import { DevopsComponent } from './devops/devops.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Zadkiel Rodriguez | About'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Zadkiel Rodriguez | Projects'
      },
      {
        path: 'database-diagrams',
        component: DatabaseDiagramsComponent,
        title: 'Zadkiel Rodriguez | Database Diagrams'
      },
      {
        path: 'api-unit-test',
        component: ApiUnitTestComponent,
        title: 'Zadkiel Rodriguez | Api Unit Testing'
      },
      {
        path: 'resume',
        component: ResumeComponent,
        title: 'Zadkiel Rodriguez | Resume'
      },
      {
        path: 'devops',
        component: DevopsComponent,
        title: 'Zadkiel Rodriguez | DevOps Presentations'
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
        title: 'Zadkiel Rodriguez | Not Found'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
