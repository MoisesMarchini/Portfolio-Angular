import { Component } from '@angular/core';
import { ProjectCard } from 'src/app/components/grid-cards/grid-cards.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectCard[] = [
    {
      title: 'TaskMaster',
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
        demo: 'https://mmp-taskmaster.vercel.app/',
        github: 'https://github.com/MoisesMarchini/TaskMaster',
      },
      background: '/assets/images/projects/taskmaster-cover.png',
    },
    {
      title: 'FurryHaven',
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
        demo: 'https://mmp-furryhaven.vercel.app/',
        github: 'https://github.com/MoisesMarchini/LandingPage-FurryHaven',
      },
      background: '/assets/images/projects/furryhaven-cover.png',
    },
    {
      title: 'Pokedex',
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
        demo: 'https://mmp-pokedex.vercel.app/',
        github: 'https://github.com/MoisesMarchini/Pokedex',
      },
      background: '/assets/images/projects/pokedex-cover.png',
    },
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
    {
      title: 'Tiny Despair',
      tags: [
        {
          title: 'Unity',
          fontAwesomeIcon: 'fa-brands fa-unity'
        },
      ],
      links: {
        demo: 'https://moisesmp.itch.io/tiny-despair',
      },
      background: '/assets/images/projects/tinydespair-cover.png',
    },
    {
      title: 'Super NiceBoy',
      tags: [
        {
          title: 'Unity',
          fontAwesomeIcon: 'fa-brands fa-unity'
        },
      ],
      links: {
        demo: 'https://moisesmp.itch.io/superniceboy',
      },
      background: '/assets/images/projects/superniceboy-cover.png',
    },
  ]

}
