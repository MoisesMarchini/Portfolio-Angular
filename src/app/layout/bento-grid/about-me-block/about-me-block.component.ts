import { Component, Input } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'about-me-block',
  templateUrl: './about-me-block.component.html',
  styleUrls: ['./about-me-block.component.scss']
})
export class AboutMeBlockComponent extends BlockComponent {
  override extendedClassNames = `col-span-12 md:col-span-8 row-span-2 bento-grid-block`

}
