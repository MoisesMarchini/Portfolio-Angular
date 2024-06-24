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
}
