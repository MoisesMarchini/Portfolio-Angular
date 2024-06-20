import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'block',
  styleUrls: ['./block.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class BlockComponent {
  @HostBinding('class') get classNames() {
    return 'block col-span-4 bg-zinc-800 border-zinc-700 border rounded p-4 text-white';
  }
}
