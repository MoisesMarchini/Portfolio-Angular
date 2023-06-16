import { Component, Input, AfterViewInit, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { AccordionElement } from './accordion-element';

const IMAGES_FOLDER = 'assets/images/'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit {
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
      {
        title: 'Accordion 1',
        fontAwesomeIconClass: "fa-brands fa-battle-net",
        backgroundImage: 'assets/images/background (1).jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla reprehenderit doloremque, velit commodi quos minus porro sit quisquam fugiat earum aut possimus quidem corporis ea nostrum ullam amet incidunt?'
      },
    ]
  }

  panelSelected = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.updateAccordionWidth();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateAccordionWidth();
  }
  
  onClickPanel(panelId: string, index: number){
    const panel = document.getElementById(panelId);
    if(!panel)
      return;

    this.panelSelected = index;

    setTimeout(() => {
      panel.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }, 800);
  }

  updateAccordionWidth(){
    const panels = this.el.nativeElement.querySelectorAll('.accordion-panel');

    let totalWidth = 0;
    const gap = '1rem';
    panels.forEach((panel: any) => {
      totalWidth += panel.offsetWidth;
    });

    this.renderer.setStyle(this.el.nativeElement.querySelector('.accordion'), 'width', `calc(${totalWidth}px + (${gap} * ${panels.length}))`);
  }

}
