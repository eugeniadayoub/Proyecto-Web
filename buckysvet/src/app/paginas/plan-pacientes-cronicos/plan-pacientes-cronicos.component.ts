import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-pacientes-cronicos',
  templateUrl: './plan-pacientes-cronicos.component.html',
  styleUrls: ['./plan-pacientes-cronicos.component.css']
})
export class PlanPacientesCronicosComponent {
  scrollToFormulario() {
    const element = document.getElementById('formulario-pacientes-cronicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  imagenes = [
    { src: 'assets/images/images-plan-pacientes-cronicos/royal_canin.png', alt: 'Royal Canin' },
    { src: 'assets/images/images-plan-pacientes-cronicos/pro_plan.png', alt: 'Pro Plan' },
    { src: 'assets/images/images-plan-pacientes-cronicos/heel_vet.png', alt: 'Heel Vet' },
    { src: 'assets/images/images-plan-pacientes-cronicos/veslab.png', alt: 'VesLab' },
    { src: 'assets/images/images-landing-page/Buckys_Vet_LOGO_y_NOMBRE.jpg', alt: "Bucky's Vet" },
    { src: 'assets/images/images-plan-pacientes-cronicos/elanco.png', alt: 'Elanco' },
    { src: 'assets/images/images-plan-pacientes-cronicos/zoetis.png', alt: 'Zoetis' },
    { src: 'assets/images/images-plan-pacientes-cronicos/boehringer.png', alt: 'Boehringer Ingelheim' }
  ];

  currentIndex = 0;
  visibleCount = 7; 

  get imagenesVisibles() {
    return this.imagenes.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  moverCarrusel(direccion: number) {
    const maxIndex = this.imagenes.length - this.visibleCount;
    this.currentIndex += direccion;

    if (this.currentIndex < 0) {
      this.currentIndex = maxIndex;
    } else if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }
  }
}
