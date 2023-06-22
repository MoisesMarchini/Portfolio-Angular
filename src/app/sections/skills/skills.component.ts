import { Component } from '@angular/core';
import { SkillCard } from 'src/app/components/grid-cards/grid-cards.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: SkillCard[] = [
    {
      title: 'html',
      fontAwesomeIcon: "fa-brands fa-html5"
    },
    {
      title: 'css',
      fontAwesomeIcon: "fa-brands fa-css3"
    },
    {
      title: 'javascript',
      fontAwesomeIcon: "fa-brands fa-js"
    },
    {
      title: 'sass',
      fontAwesomeIcon: "fa-brands fa-sass"
    },
    {
      title: 'angular',
      fontAwesomeIcon: "fa-brands fa-angular"
    },
    {
      title: 'typescript',
      fontAwesomeIcon: "fa-brands fa-angular"
    },
  ]

}
