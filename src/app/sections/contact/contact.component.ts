import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  tempArray = Array(3).fill(0);
  constructor() { }

  ngOnInit() {

  }

}
