import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {Subject, takeUntil} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit, OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  iconEnvelopeSquare = faEnvelopeSquare;
  isMobile = false;

  @ViewChild('contactMe') contactMeRef: ElementRef | undefined;
  @Output() emitContactMeRef: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Handset])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
  }

  ngAfterViewInit() {
    this.emitContactMeRef.emit(this.contactMeRef);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

}
