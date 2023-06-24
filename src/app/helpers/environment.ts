import { HeaderComponent } from '../sections/header/header.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';

export const environment = {
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
    '10vmin',
    '0vmin',
    '30vmin',
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
  }
}
