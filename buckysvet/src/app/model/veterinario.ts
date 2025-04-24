
import { Mascota } from "./mascota";
import { Tratamiento } from "./tratamiento";
export interface Veterinario {
    id: number;
    cedula: number;
    nombre: string;
    contrasena: string;
    especialidad: string;
    foto: string;
    numeroAtenciones: number;
    mascotas: Mascota[];
    tratamientos: Tratamiento[];
}
