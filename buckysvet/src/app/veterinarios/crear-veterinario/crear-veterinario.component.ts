import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from '../../service/veterinario.service';  // Asegúrate de que el servicio esté correctamente importado
import { Veterinario } from 'src/app/model/veterinario';  // Modelo Veterinario

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent {

  mensaje: string = '';
  constructor(
    private router: Router,
    private veterinarioService: VeterinarioService
  ) {}

  onSubmit(veterinario: Veterinario): void {
    this.veterinarioService.guardar(veterinario).subscribe({
      next: (nuevoVeterinario) => {
        console.log('Veterinario creado correctamente:', nuevoVeterinario);
        this.router.navigate(['/veterinarios']);
      },
      error: (error) => {
        console.error('Error al crear el veterinario:', error);
        this.mensaje = 'Hubo un error al crear el veterinario. Por favor, intenta nuevamente.';
      }
    });    
  }

  onCancelar(): void {
    this.router.navigate(['/veterinarios']);  
  }
}
