import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asesoria-nutricion',
  templateUrl: './asesoria-nutricion.component.html',
  styleUrls: ['./asesoria-nutricion.component.css']
})
export class AsesoriaNutricionComponent {
  @ViewChild('contNutricion') contNutricion!: ElementRef;

  scrollToInfo(): void {
    this.contNutricion.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  mostrarPerros: boolean = true;

  mostrarTabla(tipo: 'perros' | 'gatos'): void {
    this.mostrarPerros = tipo === 'perros';
  }
}
