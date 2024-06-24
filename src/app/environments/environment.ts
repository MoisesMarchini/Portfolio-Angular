import { languages } from './languages';
import { ProjectModel } from './projects';

export const environment = {
  loaded: false,
  loadTimer: 2500,
  currentActiveSection: 0,
  darkMode: true,
  language: 'pt-br' as 'pt-br' | 'en',

  routePaths: ['/home', '/projects', '/contact'],

  boxMargin: [
    'max(10vmin, 5px)',
    '0px',
    'max(30vmin, 10px)',
    'max(15vmin, 10px)',
  ],

  boxPadding: ['64px', '128px', '128px', '128px'],

  socialMediaLinks: {
    linkedin: 'https://www.linkedin.com/in/moisesmarchinipereira/',
    github: 'https://github.com/MoisesMarchini/',
    itchIo: 'https://moisesmp.itch.io/',
    email: 'mailto:moisesmarchinipereira@gmail.com',
    phone: 'https://api.whatsapp.com/send?phone=5521970632544',
  },

  get languageData() {
    return languages[this.language];
  },

  get routeTitles() {
    return this.languageData.routeTitles;
  },

  get projects() {
    return this.languageData.projects;
  },

  getProjectRoute(project: ProjectModel) {
    return project.title.toLowerCase().replaceAll(' ', '-');
  },
};
