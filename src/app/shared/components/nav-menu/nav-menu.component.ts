import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isOpen = false;

  darkMode() { return environment.darkMode }
  routeSelectors() { return environment.routeNavSelectors }
  getCurrentSectionTitle(section: number) { return environment.sectionsTitle[section] }
  get appLanguage() {return environment.language}
  set appLanguage(lang: 'pt-br' | 'en') {environment.language = lang}

  constructor() { }

  ngOnInit() {
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
