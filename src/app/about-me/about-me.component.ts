import { Component, OnInit } from '@angular/core';
import {faCoffee, faPerson, faProjectDiagram, faTrophy} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  iconTrophy = faTrophy;
  iconPerson = faPerson;
  iconProjectDiagram = faProjectDiagram;
  constructor() { }

  ngOnInit(): void {
  }

}
