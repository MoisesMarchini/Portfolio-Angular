import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navLinks: { path: string; title: string }[] = [];
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

  ngOnInit() {
    this.navLinks = this.getNavLinks();
  }
}
