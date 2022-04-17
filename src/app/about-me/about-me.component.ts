import { Component, OnInit } from '@angular/core';
import {faCoffee, faTrophy} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  iconTrophy = faTrophy;
  constructor() { }

  ngOnInit(): void {
  }

}
