export interface ProjectModel {
  title: string;
  tags: { title: string; fontAwesomeIcon: string }[];
  links: { demo: string; github?: string };
  background: string;
  description: string;
  favicon: string;
}

export const freelancerProjects: ProjectModel[] = [
  {
    title: 'CorreFox',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://corre-fox.vercel.app/',
      github: ''
    },
    background: '',
    description: 'Landing page sobre assessoria especializada em corrida e TAF militar.',
    favicon: 'https://corre-fox.vercel.app/run-or-die.jpeg'
  },
  {
    title: 'PsicoFácil',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://www.psicofacil.com.br/',
      github: ''
        //'https://github.com/MoisesMarchini/Template-GreenThumb/tree/master',
    },
    background: '',
    description: 'Plataforma de atendimentos online e gestão de prontuários psicológicos.',
    favicon: 'https://www.psicofacil.com.br/favicon.svg'
  },
  {
    title: 'RoofersNearMe',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://roofersnearme.mn/',
      github: ''
        //'https://github.com/MoisesMarchini/Template-GreenThumb/tree/master',
    },
    background: '',
    description: 'Plataforma conectando clientes a profissionais de telhado locais.',
    favicon: 'https://roofersnearme.mn/favicon.ico'
  },
  {
    title: 'Fresh Cleaning Team',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://freshcleaningteam.com/',
      github: ''
        //'https://github.com/MoisesMarchini/Template-GreenThumb/tree/master',
    },
    background: '',
    description: 'Serviços personalizados de limpeza residencial e comercial.',
    favicon: 'https://freshcleaningteam.com/favicon.ico'
  },
  {
    title: 'Portfólio: Fernando Alexei',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://fernandex.tech/',
      github: ''
        //'https://github.com/MoisesMarchini/Template-GreenThumb/tree/master',
    },
    background: '',
    description: 'Portfólio pessoal de Product Manager, exibindo projetos e habilidades.',
    favicon: 'https://fernandex.tech/favicon.svg'
  },
];
export const gamesProjects: ProjectModel[] = [
  {
    title: 'Tiny Despair',
    tags: [
      {
        title: 'Unity',
        fontAwesomeIcon: 'fa-brands fa-unity',
      },
    ],
    links: {
      demo: 'https://moisesmp.itch.io/tiny-despair',
    },
    background: '/assets/images/projects/tinydespair-cover.png',
    description: 'Dungeon crawler roguelite com geração procedural, onde você deve derrotar inimigos e coletar itens.',
    favicon: 'https://img.itch.zone/aW1nLzEwMTMzMzUzLnBuZw==/32x32%23/EnqiPe.png'
  },
  {
    title: 'Super NiceBoy',
    tags: [
      {
        title: 'Unity',
        fontAwesomeIcon: 'fa-brands fa-unity',
      },
    ],
    links: {
      demo: 'https://moisesmp.itch.io/superniceboy',
    },
    background: '/assets/images/projects/superniceboy-cover.png',
    description: 'Jogo troll desafiador, ensinando a ser um "Nice Guy", com o objetivo de alcançar a bandeira.',
    favicon: 'https://img.itch.zone/aW1nLzE1OTg5MzkucG5n/32x32%23/vPFkCk.png'
  },
];
export const studyProjects: ProjectModel[] = [
  {
    title: 'EconoMZ',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
      {
        title: 'Firebase',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
    ],
    links: {
      demo: 'https://econo-mz.vercel.app/',
      github: 'https://github.com/MoisesMarchini/TaskMaster',
    },
    background: '',
    description: 'WebApp de controle de gastos utilizando os serviços do Firebase para armazenamento e autenticação.',
    favicon: 'https://econo-mz.vercel.app/favicon.ico'
  },
    {
      title: 'TaskMaster',
      tags: [
        {
          title: 'Angular',
          fontAwesomeIcon: 'fa-brands fa-angular',
        },
        {
          title: 'Sass',
          fontAwesomeIcon: 'fa-brands fa-sass',
        },
      ],
      links: {
        demo: 'https://mmp-taskmaster.vercel.app/',
        github: 'https://github.com/MoisesMarchini/TaskMaster',
      },
      background: '/assets/images/projects/taskmaster-cover.png',
      description: 'ToDo WebApp inspirado em Kanban, com gerenciamento de tarefas de forma prática e visual.',
    favicon: 'https://mmp-taskmaster.vercel.app/assets/logo/logo-bg-blue.svg'
    },
  {
    title: 'Pokedex',
    tags: [
      {
        title: 'Angular',
        fontAwesomeIcon: 'fa-brands fa-angular',
      },
      {
        title: 'Sass',
        fontAwesomeIcon: 'fa-brands fa-sass',
      },
    ],
    links: {
      demo: 'https://mmp-pokedex.vercel.app/',
      github: 'https://github.com/MoisesMarchini/Pokedex',
    },
    background: '/assets/images/projects/pokedex-cover.png',
    description: 'WebApp de consulta de Pokémon, exibindo informações detalhadas sobre cada criatura.',
    favicon: 'https://mmp-pokedex.vercel.app/favicon.ico'
  },
];

export const projects = {
  paid: freelancerProjects,
  games: gamesProjects,
  study: studyProjects,
  lastestProjects: [studyProjects[0], freelancerProjects[0], freelancerProjects[1]],
  all: [...freelancerProjects, ...gamesProjects, ...studyProjects]
}
