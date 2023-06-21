import { Component, AfterViewInit } from '@angular/core';
import { environment } from './helpers/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio-Angular';

  componentSelectors = environment.componentSelectors;

  get currentSection(){
    return environment.currentActiveSection
  }
  get boxMargin(){
    return environment.boxMargin[this.currentSection];
  }
  get boxPadding(){
    return environment.boxPadding[this.currentSection];
  }
  get darkMode(){
    return environment.darkMode;
  }

  ngAfterViewInit(): void {
  }
}
