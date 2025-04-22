import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuenosService } from '../../service/duenos.service';
import { Dueno } from 'src/app/model/dueno';

@Component({
  selector: 'app-crear-dueno',
  templateUrl: './crear-dueno.component.html',
  styleUrls: ['./crear-dueno.component.css']
})
export class CrearDuenoComponent {

  constructor(
    private router: Router,
    private duenoService: DuenosService
  ) {}

  // Maneja el evento de envío del formulario (cuando el usuario crea un nuevo dueño)
  onSubmit(dueno: Dueno): void {
    this.duenoService.guardarDueno(dueno).subscribe(
      (nuevoDueno) => {
        console.log('Dueño creado correctamente:', nuevoDueno);
        this.router.navigate(['/duenos']);  // Redirige a la lista de dueños
      },
      (error) => {
        console.error('Error al crear el dueño:', error);
        alert('Hubo un error al crear el dueño. Por favor, intenta nuevamente.');
      }
    );
  }

  // Maneja el evento de cancelación (cuando el usuario quiere cancelar la acción)
  onCancelar(): void {
    this.router.navigate(['/duenos']);  // Redirige a la lista de dueños
  }
}
