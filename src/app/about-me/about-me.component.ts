import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { faPerson, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  iconTrophy = faTrophy;
  iconPerson = faPerson;
  iconProjectDiagram = faProjectDiagram;

  @Input() contactMeRef: ElementRef | undefined;
  @ViewChild('aboutMe') aboutMeRef: ElementRef | undefined;
  @Output() emitAboutMeRef: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  constructor() { }

  ngAfterViewInit() {
    this.emitAboutMeRef.emit(this.aboutMeRef);
  }

  letTake(): void {
    this.contactMeRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
}
