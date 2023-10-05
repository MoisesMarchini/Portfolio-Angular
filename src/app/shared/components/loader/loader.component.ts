import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  get loaded() { return environment.loaded; }
  set loaded(value) { environment.loaded = value; }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      environment.loaded = true;
    }, environment.loadTimer);
  }
}
