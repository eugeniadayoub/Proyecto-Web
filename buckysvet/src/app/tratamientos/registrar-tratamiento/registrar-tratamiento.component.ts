import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../../service/tratamiento.service';
import { MascotasService } from '../../service/mascotas.service';
import { MedicamentoService } from '../../service/medicamento.service';
import { VeterinarioService } from '../../service/veterinario.service';
import { Tratamiento } from '../../model/tratamiento';
import { Mascota } from '../../model/mascota';
import { Medicamento } from '../../model/medicamento';
import { Veterinario } from '../../model/veterinario';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './registrar-tratamiento.component.html',
  styleUrls: ['./registrar-tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {

  tratamiento: Tratamiento = {
    idTratamiento: 0,
    fecha: '',
    descripcion: '',
    cantidad: 0,
    mascota: { mascotaId: 0, nombre: '', especie: '', edad: 0, peso: 0, enfermedad: '', imagenUrl: '', estado: '', dueno: { id: 0, cedula: 0, nombre: '', password: '', email: '', telefono: 0, imagenUrl: ''} },
    veterinario: { idVeterinario: 0, nombre: '', especialidad: '', numeroAtenciones: 0, cedula: 0, contrasena: '', foto: '', mascotas: [], tratamientos: [] },
    medicamento: { idMedicamento: 0, nombre: '', precioCompra: 0, precioVenta: 0, unidadesDisponibles: 0, unidadesVendidas: 0 }
  };

  mascotas: Mascota[] = [];
  medicamentos: Medicamento[] = [];
  veterinarios: Veterinario[] = [];

  constructor(
    private tratamientoServicio: TratamientoService,
    private mascotaServicio: MascotasService,
    private medicamentoServicio: MedicamentoService,
    private veterinarioServicio: VeterinarioService
  ) {}

  ngOnInit(): void {
    this.obtenerMascotas();
    this.obtenerMedicamentos();
    this.obtenerVeterinarios();
  }

  obtenerMascotas(): void {
    this.mascotaServicio.obtenerTodas().subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
        console.log('Mascotas obtenidas:', this.mascotas);
      },
      error: (error) => console.error('Error al obtener mascotas:', error)
    });
  }

  obtenerMedicamentos(): void {
    this.medicamentoServicio.obtenerTodos().subscribe({
      next: (medicamentos) => {
        this.medicamentos = medicamentos;
        console.log('Medicamentos obtenidos:', this.medicamentos);
      },
      error: (error) => console.error('Error al obtener medicamentos:', error)
    });
  }

  obtenerVeterinarios(): void {
    this.veterinarioServicio.obtenerTodos().subscribe({
      next: (veterinarios) => {
        this.veterinarios = veterinarios;
        console.log('Veterinarios obtenidos:', this.veterinarios);
      },
      error: (error) => console.error('Error al obtener veterinarios:', error)
    });
  }

  registrarTratamiento(): void {
    console.log('Tratamiento a registrar:', this.tratamiento);  // Verifica que los datos sean correctos
    this.tratamientoServicio.guardar(this.tratamiento).subscribe({
      next: (response) => {
        console.log('Tratamiento registrado:', response);
      },
      error: (error) => {
        console.error('Error al registrar tratamiento:', error);
        console.error(error);  // Imprimir el error completo para más detalles
      }
    });
  }
  
  
}
