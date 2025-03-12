import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.setDarkMode(environment.darkMode);
  }

  setDarkMode(value?: boolean) {
    this.updateSubject(value);
    environment.darkMode = !!value;
  }

  private updateSubject(darkMode?: boolean) {
    this.darkModeSubject.next(!!darkMode);
    this.ToggleBodyClass('dark', this.darkModeSubject.value == true);
  }

  ToggleBodyClass(cssClass: string, value: boolean) {
    document.body.classList.toggle(
      cssClass,
      value
    )
  }
}
