import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-2022';

  contactMeRef: ElementRef | undefined;
  aboutMeRef: ElementRef | undefined;

  constructor(private changeRef: ChangeDetectorRef) {}

  contactMeRefEmit(event: ElementRef): void {
    this.contactMeRef = event;
    this.changeRef.detectChanges();
  }

  aboutMeRefEmit(event: ElementRef): void {
    this.aboutMeRef = event;
    this.changeRef.detectChanges();
  }
}
