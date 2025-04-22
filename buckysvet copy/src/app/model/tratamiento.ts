import { Veterinario } from "./veterinario";
import { Mascota } from "./mascota";
import { Medicamento } from "./medicamento";

export interface Tratamiento {
    idTratamiento: number;
    fecha: string;
    descripcion: string;
    cantidad: number;
    mascota: Mascota;
    veterinario: Veterinario;
    medicamento: Medicamento;
}
