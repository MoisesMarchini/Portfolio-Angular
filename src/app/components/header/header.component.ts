import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  line1 = 'Moisés Marchini'
  animatedText1 = "FRONT-END"
  animatedText2 = 'DEVELOPER'

  constructor() { }

  convertStringIntoArray(baseString: string) {
    const result: string[] = [];

    for (let index = 0; index < baseString.length; index++) {
      result.push(baseString[index]);
    }

    return result;
  }

}
