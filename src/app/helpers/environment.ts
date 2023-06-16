import { HeaderComponent } from '../components/header/header.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { GridCardsComponent } from '../components/grid-cards/grid-cards.component';

export const environment = {
  enabled3d: false,
  currentActiveSection: 0,

  componentSelectors: [
    HeaderComponent,
    AccordionComponent,
    GridCardsComponent
  ],

  blobColors: [
    'var(--app-primary-color)',
    'white',
    'transparent',
  ],

  boxMargin: [
    '10vmin',
    '20vmin',
    '0vmin',
  ],
  boxPadding: [
    '2rem',
    '1rem',
    'calc(2rem + 10vmin)',
],
}
