import { Dueno } from "./dueno";
import { Tratamiento } from "./tratamiento";

export interface Mascota {
    mascotaId?: number;
    nombre: string;
    especie: string;
    edad: number;
    peso: number;
    enfermedad: string;
    imagenUrl: string;
    estado: string;
    idDueno?: number;
}

  