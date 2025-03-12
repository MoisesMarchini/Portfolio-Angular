import { Component, ElementRef } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'dark-mode-block',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeBlockComponent extends BlockComponent {
  darkMode = false;

  constructor(
    private darkModeService: DarkModeService,
    elementRef: ElementRef
  ) {
    super(elementRef);
    darkModeService.darkMode$.subscribe(_darkMode => this.darkMode = _darkMode)
  }

  onChange() {
    this.darkModeService.setDarkMode(this.darkMode);
  }
}
