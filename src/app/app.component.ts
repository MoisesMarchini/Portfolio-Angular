import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements AfterViewInit {
  appLoaded() { return environment.loaded; }
  title = 'Moisés Marchini - Portfólio';

  componentSelectors = environment.componentSelectors;

  currentSection(){
    return environment.currentActiveSection
  }
  boxMargin() {
    return environment.boxMargin[this.currentSection()];
  }
  boxPadding(){
    return environment.boxPadding[this.currentSection()];
  }
  darkMode(){
    return environment.darkMode;
  }

  ngAfterViewInit(): void {
  }
}
