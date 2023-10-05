/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteControllerService } from './route-controller.service';

describe('Service: RouteController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteControllerService]
    });
  });

  it('should ...', inject([RouteControllerService], (service: RouteControllerService) => {
    expect(service).toBeTruthy();
  }));
});
