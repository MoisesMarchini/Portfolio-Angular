import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from './helpers/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
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
