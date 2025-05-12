import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { MascotasService } from 'src/app/service/mascotas.service';
import { MedicamentoService } from 'src/app/service/medicamento.service';
import { Router } from '@angular/router';

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
  ventasTotales: number = 0;
  gananciasTotales: number = 0;
  top3Tratamientos: any[] = [];

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
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#42A5F5', '#EF5350']
      }
    ]
  };

  public mascotasPieType: ChartType = 'pie';

  public gananciasLabels: string[] = [];
  public gananciasData: ChartConfiguration<'bar'>['data'] = {
    labels: this.gananciasLabels,
    datasets: [
      { data: [], label: 'Ganancia por Medicamento', backgroundColor: '#66BB6A' }
    ]
  };
  public gananciasOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Ganancia por Medicamento' }
    }
  };

  public top3Labels: string[] = [];
  public top3Data: number[] = [];

  //Configuración de la gráfica de barras horizontales (Top 3 Tratamientos)
  public top3ChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.top3Labels,
    datasets: [
      {
        data: this.top3Data,
        label: 'Unidades Vendidas',
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };

  public top3ChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  public top3ChartType: 'bar' = 'bar';

  constructor(
    private tratamientoService: TratamientoService,
    private veterinarioService: VeterinarioService,
    private mascotaService: MascotasService,
    private medicamentoService: MedicamentoService,
    private router: Router
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
    
    this.medicamentoService.obtenerVentasTotales().subscribe({
      next: (data) => {
        console.log('Ventas totales recibidas:', data); //Agrega este log temporal
        this.ventasTotales = data;
      },
      error: (error) => {
        console.error('Error al obtener ventas totales', error);
      }
    });

    this.medicamentoService.obtenerGananciasTotales().subscribe({
      next: (data) => {
        this.gananciasTotales = data;
      },
      error: (error) => {
        console.error('Error al obtener las ganancias totales', error);
      }
    });

    this.medicamentoService.obtenerGananciasPorMedicamento().subscribe({
      next: (data) => {
        this.gananciasLabels = data.map(item => item[0]);
        this.gananciasData.labels = this.gananciasLabels;
        this.gananciasData.datasets[0].data = data.map(item => item[1]);
      },
      error: (error) => {
        console.error('Error al obtener ganancias por medicamento', error);
      }
    });
    
    this.tratamientoService.obtenerTop3TratamientosMasVendidos().subscribe({
      next: (data) => {
        this.top3Tratamientos = data;

        // Actualizar gráfico
      this.top3Labels = data.map(t => t.descripcion);
      this.top3Data = data.map(t => t.cantidad);
      this.top3ChartData.labels = this.top3Labels;
      this.top3ChartData.datasets[0].data = this.top3Data;
      },
      error: (error) => {
        console.error('Error al obtener top 3 tratamientos más vendidos', error);
      }
    });
    
  }

  private updateMascotasPieChart() {
    this.mascotasPieData.datasets[0].data[0] = this.cantidadMascotasActivas; // Activas
    this.mascotasPieData.datasets[0].data[1] = this.cantidadMascotasTotales - this.cantidadMascotasActivas; // Inactivas
  }

  cerrarSesion() {
    this.router.navigate(['/login/admin']);
  }
}
