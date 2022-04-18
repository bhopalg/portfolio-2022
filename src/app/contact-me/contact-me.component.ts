import { Component, OnInit } from '@angular/core';
import {faEnvelopeSquare, faMailBulk} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  iconEnvelopeSquare = faEnvelopeSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
