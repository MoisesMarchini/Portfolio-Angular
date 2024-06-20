import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BentoGridComponent } from './bento-grid.component';
import { BlockComponent } from './block/block.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [BentoGridComponent, BlockComponent, SocialsComponent],
  imports: [CommonModule],
  exports: [BentoGridComponent],
})
export class BentoGridModule {}
