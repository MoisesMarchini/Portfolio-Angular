import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteControllerService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        const routeId = event.snapshot.routeConfig?.data?.['id'];
        if (typeof routeId === 'number') {
          environment.currentActiveSection = routeId;
        }
      }
    })
  }

}
