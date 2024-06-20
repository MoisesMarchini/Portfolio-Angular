import { Component, AfterViewInit } from '@angular/core';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Moisés Marchini - Portfólio';

  constructor() {}

  darkMode() {
    return environment.darkMode;
  }

  ngAfterViewInit(): void {}
}
