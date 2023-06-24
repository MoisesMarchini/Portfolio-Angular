import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { environment } from './helpers/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements AfterViewInit {
  appLoaded = false;
  title = 'Portfolio-Angular';

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
