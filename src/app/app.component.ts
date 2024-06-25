import { Component, AfterViewInit } from '@angular/core';
import { DarkModeService } from './layout/bento-grid/dark-mode/dark-mode.service';
import { environment } from './environments/environment';

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
    darkModeService.darkMode$.subscribe((darkMode) => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 10);
    });
  }

  ngAfterViewInit(): void {}

  getRadialBgColor() {
    const rng = Math.round(Math.random() * 10);
    const bgColor = 0; //rng % this.radialBgColors.length;

    const darkModeColor = this.radialBgColors[bgColor];
    const lightModeColor = '#ffffff';

    return this.darkMode ? darkModeColor : lightModeColor;
  }
}
