import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../../service/veterinario.service';
import { Veterinario } from 'src/app/model/veterinario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrls: ['./modificar-veterinario.component.css']
})
export class ModificarVeterinarioComponent implements OnInit {
  veterinarioForm: FormGroup;
  veterinario?: Veterinario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService,
    private fb: FormBuilder
  ) {

    this.veterinarioForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      contrasena: ['', Validators.required],
      foto: ['', Validators.required],
      numeroAtenciones: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.veterinarioService.obtenerPorId(id).subscribe({
      next: (veterinario) => {
        if (veterinario) {
          this.veterinario = veterinario;
          this.veterinarioForm.patchValue(veterinario);
        } else {
          alert('Veterinario no encontrado');
          this.router.navigate(['/veterinarios']);
        }
      },
      error: () => {
        alert('Error al obtener el veterinario');
        this.router.navigate(['/veterinarios']);
      }
    });
  }

  onSubmit(veterinarioActualizado: Veterinario): void {

    this.veterinarioService.actualizar(veterinarioActualizado).subscribe({
      next: () => this.router.navigate(['/veterinarios']),
      error: () => alert('Error al actualizar el veterinario')
    });
  }

  onCancelar(): void {
    this.router.navigate(['/veterinarios']);
  }
}
