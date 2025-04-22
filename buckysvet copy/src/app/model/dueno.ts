import { Mascota } from "./mascota";
import { Tratamiento } from "./tratamiento"

export interface Dueno {
    id : number;
    cedula : number;
    nombre : string;
    email : string;
    telefono : number;
    imagenUrl : string;
    password : string;
    mascotas?: Mascota[];
}
