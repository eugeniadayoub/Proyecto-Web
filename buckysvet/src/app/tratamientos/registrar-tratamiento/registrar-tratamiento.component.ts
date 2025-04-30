import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../../service/tratamiento.service';
import { MascotasService } from '../../service/mascotas.service';
import { MedicamentoService } from '../../service/medicamento.service';
import { VeterinarioService } from '../../service/veterinario.service';
import { Tratamiento } from '../../model/tratamiento';
import { Mascota } from '../../model/mascota';
import { Medicamento } from '../../model/medicamento';
import { Veterinario } from '../../model/veterinario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './registrar-tratamiento.component.html',
  styleUrls: ['./registrar-tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {

  tratamiento: Tratamiento = {
    id: null,
    fecha: '',
    descripcion: '',
    cantidad: 0,
    mascota: { mascotaId: 0, nombre: '', especie: '', edad: 0, peso: 0, enfermedad: '', imagenUrl: '', estado: '', dueno: { id: 0, cedula: 0, nombre: '', password: '', email: '', telefono: 0, imagenUrl: ''} },
    veterinario: { id: 0, nombre: '', especialidad: '', numeroAtenciones: 0, cedula: 0, contrasena: '', foto: '', mascotas: [], tratamientos: [] },
    medicamento: { id: 0, nombre: '', precioCompra: 0, precioVenta: 0, unidadesDisponibles: 0, unidadesVendidas: 0 }
  };

  mascotas: Mascota[] = [];
  medicamentos: Medicamento[] = [];
  veterinarioLogueado: Veterinario | null = null;

  constructor(
    private tratamientoServicio: TratamientoService,
    private mascotaServicio: MascotasService,
    private medicamentoServicio: MedicamentoService,
    private veterinarioServicio: VeterinarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerMascotas();
    this.obtenerMedicamentos();
    this.obtenerVeterinarioLogueado();
  }

  obtenerMascotas(): void {
    this.mascotaServicio.obtenerTodas().subscribe({
      next: (mascotas) => this.mascotas = mascotas,
      error: (error) => console.error('Error al obtener mascotas:', error)
    });
  }

  obtenerMedicamentos(): void {
    this.medicamentoServicio.obtenerTodos().subscribe({
      next: (medicamentos) => this.medicamentos = medicamentos,
      error: (error) => console.error('Error al obtener medicamentos:', error)
    });
  }

  obtenerVeterinarioLogueado(): void {
    const idGuardado = localStorage.getItem('veterinarioId');

    if (idGuardado) {
      const id = parseInt(idGuardado, 10);
      this.veterinarioServicio.obtenerPorId(id).subscribe({
        next: (veterinario) => {
          this.veterinarioLogueado = veterinario;
          console.log('Veterinario logueado:', veterinario);
        },
        error: (err) => console.error('Error obteniendo veterinario logueado:', err)
      });
    } else {
      console.error('No se encontró el ID del veterinario logueado en localStorage');
    }
  }

  registrarTratamiento(): void {
    if (!this.veterinarioLogueado || this.tratamiento.mascota.mascotaId <= 0 || this.tratamiento.medicamento.id <= 0) {
      alert("Selecciona una mascota, medicamento y espera a que se cargue el veterinario");
      return;
    }

    this.tratamiento.mascota = {
      mascotaId: this.tratamiento.mascota.mascotaId,
      nombre: '',
      especie: '',
      edad: 0,
      peso: 0,
      enfermedad: '',
      imagenUrl: '',
      estado: '',
      dueno: { id: 0, cedula: 0, nombre: '', password: '', email: '', telefono: 0, imagenUrl: '' }
    };

    this.tratamiento.medicamento = {
      id: this.tratamiento.medicamento.id,
      nombre: '',
      precioCompra: 0,
      precioVenta: 0,
      unidadesDisponibles: 0,
      unidadesVendidas: 0
    };

    this.tratamiento.veterinario = {
      id: this.veterinarioLogueado.id,
      nombre: '',
      especialidad: '',
      numeroAtenciones: 0,
      cedula: 0,
      contrasena: '',
      foto: '',
      mascotas: [],
      tratamientos: []
    };

    console.log('Tratamiento a registrar:', this.tratamiento);

    this.tratamientoServicio.guardar(this.tratamiento).subscribe({
      next: (response) => {
        console.log('Tratamiento registrado exitosamente:', response);
        this.router.navigate([`/veterinario-dashboard/${response.veterinario.id}`]);
      },
      error: (error) => {
        console.error('Error al registrar tratamiento:', error);
      }
    });
  }
}
