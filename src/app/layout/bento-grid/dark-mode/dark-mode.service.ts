import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeSubject = new BehaviorSubject(environment.darkMode);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.darkMode$.subscribe((darkMode) => (environment.darkMode = darkMode));
  }
}
