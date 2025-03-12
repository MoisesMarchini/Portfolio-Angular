import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() model?: SectionHeaderModel;
}

export interface SectionHeaderModel {
  title: string,
  description?: string;
}
