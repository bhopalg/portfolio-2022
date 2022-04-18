import {ChangeDetectorRef, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-2022';

  contactMeRef: ElementRef | undefined;

  constructor(private changeRef: ChangeDetectorRef) {}

  contactMeRefEmit(event: ElementRef): void {
    this.contactMeRef = event;
    this.changeRef.detectChanges();
  }
}
