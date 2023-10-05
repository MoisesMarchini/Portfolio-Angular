import { languages } from "./languages";

export const environment = {
  loaded: false,
  loadTimer: 2500,
  currentActiveSection: 0,
  darkMode: false,
  language: 'pt-br' as 'pt-br' | 'en',

  routeSelectors: [
    'home',
    'projects',
    'contact',
    'contactEmail',
  ],
  routeNavSelectors: [
    'home',
    'projects',
    'contact',
  ],

  boxMargin: [
    'max(10vmin, 5px)',
    '0px',
    'max(30vmin, 10px)',
    'max(15vmin, 10px)',
  ],

  boxPadding: [
    '64px',
    '128px',
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

  get languageData() { return languages[this.language] },

  get sectionsTitle() { return this.languageData.navTitles },

  get projects() { return this.languageData.projects },
}
