import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { faPerson, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  iconTrophy = faTrophy;
  iconPerson = faPerson;
  iconProjectDiagram = faProjectDiagram;

  @Input() contactMeRef: ElementRef | undefined;

  constructor() { }

  letTake(): void {
    this.contactMeRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
}
