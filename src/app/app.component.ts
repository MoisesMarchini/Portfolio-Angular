import { Component, AfterViewInit } from '@angular/core';
import { environment } from './environments/environment';
import { RouteControllerService } from './shared/services/route-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  appLoaded() { return environment.loaded; }
  title = 'Moisés Marchini - Portfólio';

  constructor(private routeControllerService: RouteControllerService){}

  currentSection(){ return environment.currentActiveSection }
  boxMargin() { return environment.boxMargin[this.currentSection()] }
  boxPadding(){ return environment.boxPadding[this.currentSection()] }
  darkMode(){ return environment.darkMode }

  ngAfterViewInit(): void {
  }
}
