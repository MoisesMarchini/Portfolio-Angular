import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { DarkModeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navLinks: { path: string; title: string }[] = [];
  darkMode = false;

  constructor(public darkModeService: DarkModeService) {
    darkModeService.darkMode$.subscribe(_darkMode => this.darkMode = _darkMode)
  }

  ngOnInit() {
    this.navLinks = this.getNavLinks();
  }

  getNavLinks() {
    const routePaths = environment.routePaths;
    const routeTitles = environment.routeTitles;

    const mapedLinks = routeTitles.map((title, index) => {
      return {
        path: routePaths[index],
        title,
      };
    });

    return mapedLinks;
  }
}
