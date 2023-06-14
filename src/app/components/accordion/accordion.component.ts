import { Component, Input, OnInit } from '@angular/core';
import { AccordionElement } from './accordion-element';

const IMAGES_FOLDER = 'assets/images/'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() accordionElements: AccordionElement[] = this.baseAccordion();

  images = [
    IMAGES_FOLDER+'background (1).jpg',
    IMAGES_FOLDER+'background (2).jpg',
    IMAGES_FOLDER+'background (3).jpg',
    IMAGES_FOLDER+'background (1).jpg',
    IMAGES_FOLDER+'background (2).jpg',
    IMAGES_FOLDER+'background (2).jpg',
  ]

  baseAccordion(): AccordionElement[] {
    return [
      {
        title: 'Accordion 1',
        fontAwesomeIconClass: "fa-brands fa-battle-net",
        backgroundImage: 'assets/images/background (1).jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla reprehenderit doloremque, velit commodi quos minus porro sit quisquam fugiat earum aut possimus quidem corporis ea nostrum ullam amet incidunt?'
      },
      {
        title: 'Accordion 1',
        fontAwesomeIconClass: "fa-brands fa-battle-net",
        backgroundImage: 'assets/images/background (2).jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla reprehenderit doloremque, velit commodi quos minus porro sit quisquam fugiat earum aut possimus quidem corporis ea nostrum ullam amet incidunt?'
      },
      {
        title: 'Accordion 1',
        fontAwesomeIconClass: "fa-brands fa-battle-net",
        backgroundImage: 'assets/images/background (1).jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla reprehenderit doloremque, velit commodi quos minus porro sit quisquam fugiat earum aut possimus quidem corporis ea nostrum ullam amet incidunt?'
      },
      {
        title: 'Accordion 1',
        fontAwesomeIconClass: "fa-brands fa-battle-net",
        backgroundImage: 'assets/images/background (3).jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla reprehenderit doloremque, velit commodi quos minus porro sit quisquam fugiat earum aut possimus quidem corporis ea nostrum ullam amet incidunt?'
      },
    ]
  }

  panelSelected = 0;

  constructor() { }

  ngOnInit() {
  }

}
