import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuenosService } from '../../service/duenos.service';
import { Dueno } from '../../model/dueno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-dueno',
  templateUrl: './modificar-duenos.component.html',
  styleUrls: ['./modificar-duenos.component.css']
})
export class ModificarDuenoComponent implements OnInit {
  dueno?: Dueno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private duenoService: DuenosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.duenoService.obtenerPorId(id).subscribe({
      next: (dueno) => {
        if (dueno) {
          this.dueno = dueno;
        } else {
          alert('Dueño no encontrado');
          this.router.navigate(['/duenos']);
        }
      },
      error: () => {
        alert('Error al obtener el dueño');
        this.router.navigate(['/duenos']);
      }
    });
  }

  onSubmit(duenoActualizado: Dueno): void {
    this.duenoService.actualizarDueno(duenoActualizado.id, duenoActualizado).subscribe({
      next: () => this.router.navigate(['/duenos']),
      error: () => alert('Error al actualizar el dueño')
    });
  }

  onCancelar(): void {
    this.router.navigate(['/duenos']);
  }
}
