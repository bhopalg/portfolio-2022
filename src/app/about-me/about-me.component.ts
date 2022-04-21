import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { faPerson, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons';
import {Subject, takeUntil} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  iconTrophy = faTrophy;
  iconPerson = faPerson;
  iconProjectDiagram = faProjectDiagram;
  isMobile = false;
  
  @Input() contactMeRef: ElementRef | undefined;
  @ViewChild('aboutMe') aboutMeRef: ElementRef | undefined;
  @Output() emitAboutMeRef: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

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
    this.emitAboutMeRef.emit(this.aboutMeRef);
  }

  letTake(): void {
    this.contactMeRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
