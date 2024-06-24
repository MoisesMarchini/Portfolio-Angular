import { Component, ElementRef } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'dark-mode-block',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent extends BlockComponent {
  darkMode = this.darkModeService.darkModeSubject.value;

  constructor(
    private darkModeService: DarkModeService,
    elementRef: ElementRef
  ) {
    super(elementRef);
  }

  onChange() {
    this.darkModeService.darkModeSubject.next(this.darkMode);
  }
}
