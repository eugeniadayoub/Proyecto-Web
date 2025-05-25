import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan-medico-integral',
  templateUrl: './plan-medico-integral.component.html',
  styleUrls: ['./plan-medico-integral.component.css']
})
export class PlanMedicoIntegralComponent {
  @ViewChild('infoIntegral') infoIntegral!: ElementRef;

  scrollToInfo(): void {
    this.infoIntegral.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }  
}
