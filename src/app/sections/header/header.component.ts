import { Component } from '@angular/core';

const TEXT1 = 'FRONT-END';
const TEXT2 = 'DEVELOPER';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  line1 = 'Moisés Marchini'
  animatedText1 = TEXT1
  animatedText2 = TEXT2

  constructor() { }

  convertStringIntoArray(baseString: string) {
    return baseString.split('');
  }

  AnimatedTextMouseEnter(event: any) {

  }

}
