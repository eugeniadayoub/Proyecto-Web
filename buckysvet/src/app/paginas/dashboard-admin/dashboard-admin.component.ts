import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { MascotasService } from 'src/app/service/mascotas.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  cantidadTratamientosUltimoMes: number = 0;
  tratamientosPorMedicamento: any[] = [];
  cantidadVeterinariosActivos: number = 0;
  cantidadVeterinariosInactivos: number = 0;
  cantidadMascotasTotales: number = 0;
  cantidadMascotasActivas: number = 0;

  // Propiedades de la gráfica de barras
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };
  
  public barChartType: ChartType = 'bar';

  public barChartData = {
    labels: [] as string[],
    datasets: [
      { data: [] as number[], label: 'Tratamientos Administrados' }
    ]
  };

  // Propiedades para gráfica de veterinarios
  public veterinariosPieData = {
    labels: ['Activos', 'Inactivos'],
    datasets: [{
      data: [] as number[],
      backgroundColor: ['#23969F', '#f9a825']
    }]
  };
  public veterinariosPieType: ChartType = 'pie';

  // Propiedades para gráfica de mascotas
  public mascotasPieData = {
    labels: ['Activas', 'Inactivas'],
    datasets: [{
      data: [] as number[],
      backgroundColor: ['#66bb6a', '#ef5350']
    }]
  };

  public mascotasPieType: ChartType = 'pie';

  constructor(
    private tratamientoService: TratamientoService,
    private veterinarioService: VeterinarioService,
    private mascotaService: MascotasService
  ) { }

  ngOnInit(): void {
    this.tratamientoService.obtenerCantidadTratamientosUltimoMes().subscribe(
      (data) => {
        this.cantidadTratamientosUltimoMes = data;
      },
      (error) => {
        console.error('Error al obtener la cantidad de tratamientos del último mes', error);
      }
    );

    this.tratamientoService.obtenerTratamientosPorMedicamentoUltimoMes().subscribe({
      next: (data) => {
        this.tratamientosPorMedicamento = data;

        //Actualizar datos de la gráfica de barras
        this.barChartData.labels = data.map(item => item[0]); // Nombre medicamento
        this.barChartData.datasets[0].data = data.map(item => item[1]); // Cantidad administrada
      },
      error: (error) => {
        console.error('Error al obtener tratamientos por medicamento', error);
      }
    });

    this.veterinarioService.obtenerCantidadVeterinariosActivos().subscribe({
      next: (data) => {
        this.cantidadVeterinariosActivos = data;
        this.veterinariosPieData.datasets[0].data[0] = data; // Activos
      },
      error: (error) => {
        console.error('Error al obtener cantidad de veterinarios activos', error);
      }
    });

    this.veterinarioService.obtenerCantidadVeterinariosInactivos().subscribe({
      next: (data) => {
        this.cantidadVeterinariosInactivos = data;
        this.veterinariosPieData.datasets[0].data[1] = data; // Inactivos
      },
      error: (error) => {
        console.error('Error al obtener cantidad de veterinarios inactivos', error);  
      }
    });

    this.mascotaService.obtenerCantidadMascotasTotales().subscribe({
      next: (data) => {
        this.cantidadMascotasTotales = data;
        this.updateMascotasPieChart();
      },
      error: (error) => {
        console.error('Error al obtener cantidad de mascotas totales', error);
      }
    });

    this.mascotaService.obtenerCantidadMascotasActivas().subscribe({
      next: (data) => {
        this.cantidadMascotasActivas = data;
        this.updateMascotasPieChart();
      },
      error: (error) => {
        console.error('Error al obtener cantidad de mascotas activas', error);
      }
    });

  }

  private updateMascotasPieChart() {
    this.mascotasPieData.datasets[0].data[0] = this.cantidadMascotasActivas; // Activas
    this.mascotasPieData.datasets[0].data[1] = this.cantidadMascotasTotales - this.cantidadMascotasActivas; // Inactivas
  }
}
