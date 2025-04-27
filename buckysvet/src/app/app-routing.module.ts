import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/informacion-mascotas/mascotas.component';
import { LandingPageComponent } from './paginas/landing/landing-page/landing-page.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './mascotas/modificar-mascota/modificar-mascota.component';
import { DetallesMascotaComponent } from './mascotas/detalles-mascota/detalles-mascota.component';
import { AsesoriaNutricionComponent } from './paginas/asesoria-nutricion/asesoria-nutricion.component';
import { BanosBuckysvetComponent } from './paginas/banos-buckysvet/banos-buckysvet.component';
import { ConsultaVirtualComponent } from './paginas/consulta-virtual/consulta-virtual.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HospitalSedeCentroComponent } from './paginas/hospital-sede-centro/hospital-sede-centro.component';
import { HospitalSedeNorteComponent } from './paginas/hospital-sede-norte/hospital-sede-norte.component';
import { LoginComponent } from './paginas/login/login.component';
import { PlanCuidadoPreventivoComponent } from './paginas/plan-cuidado-preventivo/plan-cuidado-preventivo.component';
import { PlanMedicoIntegralComponent } from './paginas/plan-medico-integral/plan-medico-integral.component';
import { PlanPacientesCronicosComponent } from './paginas/plan-pacientes-cronicos/plan-pacientes-cronicos.component';
import { ProgramaCitaPresencialComponent } from './paginas/programa-cita-presencial/programa-cita-presencial.component';
import { SedesComponent } from './paginas/sedes/sedes.component';
import { CrearDuenoComponent } from './duenos/crear-dueno/crear-dueno.component';
import { DetallesDuenoComponent } from './duenos/detalles-dueno/detalles-dueno.component';
import { InformacionDuenosComponent } from './duenos/informacion-duenos/informacion-duenos.component';
import { ModificarDuenoComponent } from './duenos/modificar-duenos/modificar-duenos.component';
import {TratamientoComponent} from './tratamientos/registrar-tratamiento/registrar-tratamiento.component';
import { DuenosmascotasComponent} from './duenos/duenos-mascotas/duenosmascotas.component';
import { LoginVeterinarioComponent } from './veterinarios/login-veterinario/login-veterinario.component';
import { VeterinarioDashboardComponent } from './veterinarios/veterinario-dashboard/veterinario-dashboard.component';
import { DashboardAdminComponent } from './paginas/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'asesoria-nutricion', component: AsesoriaNutricionComponent },
  { path: 'banos-buckysvet', component: BanosBuckysvetComponent },
  { path: 'consulta-virtual', component: ConsultaVirtualComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'hospital-sede-centro', component: HospitalSedeCentroComponent },
  { path: 'hospital-sede-norte', component: HospitalSedeNorteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-veterinario', component: LoginVeterinarioComponent },
  { path: 'veterinario-dashboard/:id', component: VeterinarioDashboardComponent },
  { path: 'plan-cuidado-preventivo', component: PlanCuidadoPreventivoComponent },
  { path: 'plan-medico-integral', component: PlanMedicoIntegralComponent },
  { path: 'plan-pacientes-cronicos', component: PlanPacientesCronicosComponent },
  { path: 'programa-cita-presencial', component: ProgramaCitaPresencialComponent},
  { path: 'sedes', component: SedesComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'crear-mascota', component: CrearMascotaComponent }, 
  { path: 'modificar-mascota/:id', component: ModificarMascotaComponent },
  { path: 'detalles-mascota/:id', component: DetallesMascotaComponent },
  { path: 'crear-dueno', component: CrearDuenoComponent },
  { path: 'modificar-dueno/:id', component: ModificarDuenoComponent },
  { path: 'detalles-dueno/:id', component: DetallesDuenoComponent },
  { path: 'duenos', component: InformacionDuenosComponent },
  { path: 'tratamientos', component: TratamientoComponent},
  { path: 'duenosmascotas/:id', component: DuenosmascotasComponent}, 
  { path: 'dashboard-admin', component: DashboardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
