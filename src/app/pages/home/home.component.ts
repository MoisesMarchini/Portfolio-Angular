import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { SectionHeaderModel } from 'src/app/shared/components/section-header/section-header.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  latestProjects = environment.projects.lastestProjects;
  socialMediaLinks = environment.socialMediaLinks;
  sectionHeaderModel: SectionHeaderModel = {
    title: 'Desenvolvedor Fullstack, amante de café e xadrez',
    description: 'Meu nome é Moisés, sou especialista em Angular e .NET, mas minha jornada começou com o desenvolvimento de jogos em 2016. Nas horas vagas assisto animes, jogo xadrez e tenho boas conversas sobre viagem no tempo.'
  }

  get darkMode() {
    return environment.darkMode;
  }
}
