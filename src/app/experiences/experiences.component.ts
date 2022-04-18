import { Component, OnInit } from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  iconCheck = faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
