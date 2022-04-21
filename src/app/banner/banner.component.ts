import { Component } from '@angular/core';
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  iconEnvelopeSquare = faEnvelopeSquare;
}
