import { HeaderComponent } from '../sections/header/header.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';

export const environment = {
  loaded: false,
  loadTimer: 2500,
  enabled3d: false,
  currentActiveSection: 0,
  darkMode: false,

  componentSelectors: [
    HeaderComponent,
    ProjectsComponent,
    ContactComponent,
  ],

  sectionsTitle: [
    'Início',
    'Projetos',
    'Contato',
  ],

  blobColors: [
    'var(--app-primary-color)',
    'transparent',
    'white',
  ],

  boxMargin: [
    'max(10vmin, 5px)',
    '0px',
    'max(30vmin, 10px)',
  ],

  boxPadding: [
    '64px',
    '128px',
    '128px',
  ],

  socialMediaLinks: {
    linkedin: 'https://www.linkedin.com/in/moisesmarchinipereira/',
    github: 'https://github.com/MoisesMarchini/',
    itchIo: 'https://moisesmp.itch.io/',
    email: 'mailto:moisesmarchinipereira@gmail.com',
    phone: 'https://api.whatsapp.com/send?phone=5521970632544',
  },

  projects: [
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
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
    },
  ]
}
