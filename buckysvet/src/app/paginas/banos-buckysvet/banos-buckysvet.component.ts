import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banos-buckysvet',
  templateUrl: './banos-buckysvet.component.html',
  styleUrls: ['./banos-buckysvet.component.css']
})
export class BanosBuckysvetComponent {
  @ViewChild('infoBanos') infoBanos!: ElementRef;

  scrollToInfo(): void {
    this.infoBanos.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
