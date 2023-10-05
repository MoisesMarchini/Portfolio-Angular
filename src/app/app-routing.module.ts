import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmailFormComponent } from './pages/email-form/email-form.component';
import { environment } from './environments/environment';

const routes: Routes = [
  {
    path: environment.routeSelectors[0],
    component: HeaderComponent,
    data: { id: 0 }
  },
  {
    path: environment.routeSelectors[1],
    component: ProjectsComponent,
    data: { id: 1 }
  },
  {
    path: environment.routeSelectors[2],
    component: ContactComponent,
    data: { id: 2 }
  },
  {
    path: environment.routeSelectors[3],
    component: EmailFormComponent,
    data: { id: 3 }
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
