import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  latestProject = environment.projects[0];

  get darkMode() {
    return environment.darkMode;
  }
}
