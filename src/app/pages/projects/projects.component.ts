import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { SectionHeaderModel } from 'src/app/shared/components/section-header/section-header.component';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsPageComponent {
  projects = environment.projects;
  sectionHeaderModel: SectionHeaderModel = {
    title: 'Projetos que Contam Minha Jornada',
    description: 'Desde freelances até jogos desenvolvidos em Unity, cada projeto aqui representa um aprendizado e um desafio superado. Sempre explorando novas tecnologias e criando algo novo.'
  }
}
