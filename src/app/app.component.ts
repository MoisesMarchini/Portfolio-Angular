import { Component, AfterViewInit } from '@angular/core';
import { environment } from './helpers/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio-Angular';

  componentSelectors = environment.componentSelectors;

  get boxMargin(){
    return environment.boxMargin[this.currentSection];
  }
  get boxPadding(){
    return environment.boxPadding[this.currentSection];
  }

  /////////////////////////////////////////////////////////////////////////// 
  // CONTROLS

  get currentSection(){
    return environment.currentActiveSection
  }
  set currentSection(value: number){
    environment.currentActiveSection = Math.max((value) % this.componentSelectors.length, 0);
  }

  increaseSection(value: number){
    this.currentSection += value;
    console.log(this.currentSection);
  }

  /////////////////////////////////////////////////////////////////////////// 

  onChangeInput(value: any){
    console.log(value.target.value)

    // environment.boxMargin = value.target.value+'vmin'
  }

  ngAfterViewInit(): void {
  }
}
