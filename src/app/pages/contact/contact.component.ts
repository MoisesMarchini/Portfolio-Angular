import { Component } from '@angular/core';
import { SectionHeaderModel } from 'src/app/shared/components/section-header/section-header.component';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sectionHeaderModel: SectionHeaderModel = {
    title: 'Vamos conversar?',
    description: 'Tem um projeto em mente ou quer trocar uma ideia? Me mande uma mensagem ou baixe meu currículo.'
  }
}
