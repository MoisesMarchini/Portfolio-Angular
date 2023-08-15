import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  isOpen = false;

  darkMode() {
    return environment.darkMode;
  }

  sectionsCount() {
    return environment.componentSelectors;
  }

  constructor() { }

  ngOnInit() {
  }

  setCurrentSection(section: number) {
    environment.currentActiveSection = section;
  }

  isCurrentSection(section: number) {
    return environment.currentActiveSection === section;
  }

  getCurrentSectionTitle(section: number) {
    return environment.sectionsTitle[section];
  }

  changeDarkMode() {
    environment.darkMode = !environment.darkMode;

    const body = document.body;
    if (environment.darkMode)
      body.classList.add('dark-mode');
    else
      body.classList.remove('dark-mode');
  }

}
