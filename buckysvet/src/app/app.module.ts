import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './paginas/landing/landing-page/landing-page.component';
import { MascotasComponent } from './mascotas/informacion-mascotas/mascotas.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './mascotas/modificar-mascota/modificar-mascota.component';
import { DetallesMascotaComponent } from './mascotas/detalles-mascota/detalles-mascota.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { FormularioMascotaComponent } from './shared-mascotas/formulario-mascota/formulario-mascota.component';
import { AsesoriaNutricionComponent } from './paginas/asesoria-nutricion/asesoria-nutricion.component';
import { BanosBuckysvetComponent } from './paginas/banos-buckysvet/banos-buckysvet.component';
import { ConsultaVirtualComponent } from './paginas/consulta-virtual/consulta-virtual.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CrearDuenoComponent } from './duenos/crear-dueno/crear-dueno.component';
import { DetallesDuenoComponent } from './duenos/detalles-dueno/detalles-dueno.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HospitalSedeCentroComponent } from './paginas/hospital-sede-centro/hospital-sede-centro.component';
import { HospitalSedeNorteComponent } from './paginas/hospital-sede-norte/hospital-sede-norte.component';
import { InformacionDuenosComponent } from './duenos/informacion-duenos/informacion-duenos.component';
import { LoginComponent } from './paginas/login/login.component';
import { ModificarDuenoComponent } from './duenos/modificar-duenos/modificar-duenos.component';
import { PlanCuidadoPreventivoComponent } from './paginas/plan-cuidado-preventivo/plan-cuidado-preventivo.component';
import { PlanMedicoIntegralComponent } from './paginas/plan-medico-integral/plan-medico-integral.component';
import { PlanPacientesCronicosComponent } from './paginas/plan-pacientes-cronicos/plan-pacientes-cronicos.component';
import { ProgramaCitaPresencialComponent } from './paginas/programa-cita-presencial/programa-cita-presencial.component';
import { SedesComponent } from './paginas/sedes/sedes.component';
import { FormularioDuenoComponent } from './shared-duenos/formulario-dueno/formulario-dueno.component';
import { HttpClientModule } from '@angular/common/http';
import { TratamientoComponent } from './tratamientos/registrar-tratamiento/registrar-tratamiento.component';
import { DuenosmascotasComponent } from './duenos/duenos-mascotas/duenosmascotas.component';
import { LoginVeterinarioComponent } from './veterinarios/login-veterinario/login-veterinario.component';
import { VeterinarioDashboardComponent } from './veterinarios/veterinario-dashboard/veterinario-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MascotasComponent,
    CrearMascotaComponent,
    ModificarMascotaComponent,
    DetallesMascotaComponent,
    HeaderComponent,
    FooterComponent,
    FormularioMascotaComponent,
    AsesoriaNutricionComponent,
    BanosBuckysvetComponent,
    ConsultaVirtualComponent,
    ContactoComponent,
    CrearDuenoComponent,
    DetallesDuenoComponent,
    ErrorComponent,
    HospitalSedeCentroComponent,
    HospitalSedeNorteComponent,
    InformacionDuenosComponent,
    LoginComponent,
    ModificarDuenoComponent,
    PlanCuidadoPreventivoComponent,
    PlanMedicoIntegralComponent,
    PlanPacientesCronicosComponent,
    ProgramaCitaPresencialComponent,
    SedesComponent,
    FormularioDuenoComponent,
    TratamientoComponent,
    DuenosmascotasComponent,
    LoginVeterinarioComponent,
    VeterinarioDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
