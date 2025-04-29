import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from '../../service/veterinario.service';
import { Veterinario } from '../../model/veterinario';  // Asegúrate de que el modelo Veterinario esté correctamente importado

@Component({
  selector: 'app-informacion-veterinarios',
  templateUrl: './informacion-veterinarios.component.html',
  styleUrls: ['./informacion-veterinarios.component.css']
})
export class InformacionVeterinariosComponent implements OnInit {

  veterinarios: Veterinario[] = []; 

  constructor(private veterinarioService: VeterinarioService, private router: Router) {}

  ngOnInit(): void {
    this.cargarVeterinarios(); 
  }
  cargarVeterinarios(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: (veterinarios: Veterinario[]) => {
        this.veterinarios = veterinarios.map(veterinario => ({
          ...veterinario,
          id: veterinario.id || 0
        }));
      },
      error: (error) => {
        console.error('Error al cargar los veterinarios:', error);
        alert('Hubo un error al cargar los veterinarios.');
      }
    });
  }

  eliminarVeterinario(id: number): void {
    if (confirm("¿Estás seguro de que deseas eliminar este veterinario?")) {
      this.veterinarioService.eliminar(id).subscribe({
        next: () => {
          console.log('Veterinario eliminado');
          this.cargarVeterinarios();  
        },
        error: (error) => {
          console.error('Error al eliminar el veterinario:', error);
          alert('Error al eliminar el veterinario. Verifique los logs del servidor.');
        }
      });
    }
  }

  cerrarSesion(): void {
    this.router.navigate(['/login/admin']);
  }
}
