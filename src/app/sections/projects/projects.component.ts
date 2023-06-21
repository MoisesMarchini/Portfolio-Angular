import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'TV Pipoca',
      tags: [
        {
          title: 'Angular',
          fontAwesomeIcon: 'fa-brands fa-angular'
        },
        {
          title: 'Sass',
          fontAwesomeIcon: 'fa-brands fa-sass'
        },
      ],
      links: {
        demo: 'https://moisesmarchini.000webhostapp.com/potfolio/TVPipoca/',
        github: 'https://github.com/MoisesMarchini/TVPipoca',
      },
      background: '/assets/images/projects/tvpipoca-cover.png',
    },
    {
      title: 'NetMovies',
      tags: [
        {
          title: 'Html',
          fontAwesomeIcon: 'fa-brands fa-html5'
        },
        {
          title: 'css',
          fontAwesomeIcon: 'fa-brands fa-css3-alt'
        },
        {
          title: 'javascript',
          fontAwesomeIcon: 'fa-brands fa-js'
        },
      ],
      links: {
        demo: 'https://moisesmarchini.000webhostapp.com/potfolio/NetMovies/index.html',
        github: 'https://github.com/MoisesMarchini/NetMovies',
      },
      background: '/assets/images/projects/netmovies-cover.png',
    },
  ]

}
