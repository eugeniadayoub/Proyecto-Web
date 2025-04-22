import { Dueno } from "./dueno";

export interface Mascota {
    mascotaId: number;
    nombre: string;
    especie: string;
    edad: number;
    peso: number;
    enfermedad?: string;
    estado: string;
    imagenUrl: string;
    dueno?: Dueno;
}

  