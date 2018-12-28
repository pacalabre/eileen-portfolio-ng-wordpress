import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  link: '#';
  constructor() { }

  ngOnInit() {
  }

}
