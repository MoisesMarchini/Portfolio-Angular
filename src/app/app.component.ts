import { Component, AfterViewInit } from '@angular/core';
import { environment } from './environments/environment';
import { DarkModeService } from './shared/services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Moisés Marchini - Portfólio';
  loading = false;

  radialBgColors = [
    '#15803d',
    '#698015',
    '#805715',
    '#801515',
    '#801560',
    '#521580',
    '#2e1580',
    '#154580',
    '#158072',
  ];

  get darkMode() {
    return environment.darkMode;
  }

  constructor(private darkModeService: DarkModeService) {
  }

  ngAfterViewInit(): void {}

  getRadialBgColor() {
    const rng = Math.round(Math.random() * 10);
    const bgColor = 0; //rng % this.radialBgColors.length;

    const darkModeColor = 'rgb(63 63 70)'; //this.radialBgColors[bgColor];
    const lightModeColor = '#ffffff';

    return this.darkMode ? darkModeColor : lightModeColor;
  }
}
