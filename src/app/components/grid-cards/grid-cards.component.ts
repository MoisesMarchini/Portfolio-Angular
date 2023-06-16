import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit {
  @Input() title: string = 'Projetos';
  
  getArray(length: number): number[] {
    return Array(length).fill(0);
  }

  constructor() { }

  ngOnInit() {
  }

}
