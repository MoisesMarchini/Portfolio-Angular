import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent {
  @Input() title: string = 'Projetos';
  @Input() projects?: ProjectCard[];
  @Input() idealWidth: string = '200px';

  getArray(length: number): number[] {
    return Array(length).fill(0);
  }
}

export interface ProjectCard{
  title: string,
  tags: { title: string, fontAwesomeIcon: string, }[],
  links: {
    demo?: string,
    github?: string,
  },
  background: string,
}
