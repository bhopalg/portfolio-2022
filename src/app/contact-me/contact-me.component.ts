import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit {

  iconEnvelopeSquare = faEnvelopeSquare;

  @ViewChild('contactMe') contactMeRef: ElementRef | undefined;
  @Output() emitContactMeRef: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  constructor() { }

  ngAfterViewInit() {
    this.emitContactMeRef.emit(this.contactMeRef);
  }

}
