import {Component, ElementRef, Input} from '@angular/core';
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  iconEnvelopeSquare = faEnvelopeSquare;

  @Input() aboutMeRef: ElementRef | undefined;

  scrollDown(): void {
    this.aboutMeRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
}
