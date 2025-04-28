import { Injectable } from '@angular/core';
import { Dueno } from '../model/dueno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuenosService {

  duenos: Dueno [] = [];

  nombresHombres = ['Carlos', 'Luis', 'Jorge', 'Roberto', 'Pablo', 'Andrés', 'Francisco', 'Esteban', 'Fernando', 'Ricardo', 
        'Emilio', 'Alejandro', 'Javier', 'Tomás'];
  nombresMujeres = ['María', 'Ana', 'Luisa', 'Marta', 'Elena', 'Lucía', 'Gabriela', 'Valentina', 'Diana', 'Rosa', 
        'Daniela', 'Mariana', 'Carla'];
  apellidos = ['Gómez', 'Pérez', 'Fernández', 'López', 'Martínez', 'Gutiérrez', 'Rodríguez', 'Vargas', 'Castro', 'Torres', 
        'Ramírez', 'Muñoz', 'Ortega', 'Moreno', 'Salazar', 'Núñez', 'Mendoza', 'Herrera', 'Cabrera', 'Santana',
        'Chávez', 'Reyes', 'Benítez', 'Esquivel', 'Navarro', 'Fuentes', 'Ávila', 'Mejía', 'Soto', 'Acosta'];
  imagenesHombres = [
      'https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=NqMHLF8T4RzPaBE_WMnflSGB_1-kZZTQgAkekUxumZg=',
        'https://media.istockphoto.com/id/1324558913/es/foto/joven-confiado-en-camisa-verde-casual-mirando-hacia-otro-lado-de-pie-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=Q09vBRkopP1XHvhMUxDYoHQgMoZvNQQEP-oLgjv6F2Q=',
        'https://media.istockphoto.com/id/1919265357/es/foto/retrato-de-cerca-del-hombre-de-negocios-confiado-de-pie-en-la-oficina.jpg?s=612x612&w=0&k=20&c=b7fTAWYXKpfAyzO-gCSJpF3wYXWdhjdy4fZSEVj0bfI=',
        'https://media.istockphoto.com/id/1399565382/es/foto/joven-empresario-mestizo-feliz-de-pie-con-los-brazos-cruzados-trabajando-solo-en-una-oficina.jpg?s=612x612&w=0&k=20&c=Tls7PDwhSbA9aaVg0RkpfPfWYaQrfecN319aOCKuU34=',
        'https://media.istockphoto.com/id/1476170969/es/foto/retrato-de-un-joven-listo-para-el-trabajo-concepto-de-negocio.jpg?s=612x612&w=0&k=20&c=AAuUZOmmNYo6hzDYNR7d88Ihnxo4jrypqVJa-B8vjys=',
        'https://media.istockphoto.com/id/1634444985/es/foto/feliz-due%C3%B1o-de-negocio-en-la-puerta-de-su-cafeter%C3%ADa-espacio-para-texto.jpg?s=612x612&w=0&k=20&c=HJsaJNNnPYW3kx2kI2Cs1vCPbx3lqAki3wBeJTjdiCI=',
        'https://media.istockphoto.com/id/1439906987/es/foto/joven-pasante-exitoso-en-anteojos-y-camisa-marr%C3%B3n.jpg?s=612x612&w=0&k=20&c=O44mj6L0tIClTtzrtRySa_ee0ofrONhPhuMBbWVswXw=',
        'https://media.istockphoto.com/id/1603245528/es/foto/apuesto-hombre-de-negocios-hispano-con-los-brazos-cruzados-sonriendo-a-la-c%C3%A1mara-indio-o.jpg?s=612x612&w=0&k=20&c=VwI4xGkN5h0ZbbiXg5RRN91M1W6zdHTYRhgC-Dpc4AU=',
        'https://media.istockphoto.com/id/1616727526/es/foto/feliz-joven-hombre-de-negocios-latino-sosteniendo-una-tableta-de-pie-en-la-oficina-retrato.jpg?s=612x612&w=0&k=20&c=mVjlURtkBLuoUWGZFY-8IhDV46npIRUh6JrKFjFw-TI=',
        'https://media.istockphoto.com/id/1059661424/es/foto/hombre-de-negocios-maduro-de-raza-mixta.jpg?s=612x612&w=0&k=20&c=z0tE_G3MMfZ6kqgacSfBzhqR5oGHZGcquds7GrOhlY4=',
        'https://media.istockphoto.com/id/1491701395/es/foto/un-hombre-de-negocios-rubio-guapo-y-feliz-con-gafas-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=ifnBoUYI3731HQIgbjhetrLd7BXiGXuEg6uRBfTLNT4=',
        'https://media.istockphoto.com/id/1352495212/es/foto/retrato-de-un-joven-y-amable-hombre-de-negocios.jpg?s=612x612&w=0&k=20&c=lvb_5AbA3K0hcBrf8WnDuQyswrChqVh1Fh9ZyJw5Aow=',
        'https://media.istockphoto.com/id/1911521695/es/foto/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=n6KLrQMD8WWiJJ6W1oJf7ufWeIMCO6W2LAGy1nApo38=',
        'https://media.istockphoto.com/id/1492359326/es/foto/retrato-tableta-digital-y-hombre-negro-en-la-oficina-feliz-sonriente-y-empoderado-ambici%C3%B3n-y.jpg?s=612x612&w=0&k=20&c=qr4m8aYYdpt-LLXYvw2a2svAcwQUxiV0poUxTYlQvAU=',
        'https://media.istockphoto.com/id/1598828828/es/foto/retrato-de-un-exitoso-jefe-maduro-un-hombre-de-negocios-de-alto-rango-en-traje-de-negocios.jpg?s=612x612&w=0&k=20&c=O_Li8ilA392xa_eUs89h4O0_UKIowoL2ZL8HZ8N6unM=',
        'https://media.istockphoto.com/id/1522377399/es/foto/retrato-exitoso-gerente-de-negocios-masculino-afroamericano-y-asesor-financiero.jpg?s=612x612&w=0&k=20&c=KMS3fRRHcO1wHvERucmuIPisAkrlnEHej4Hp683ajWk=',
        'https://media.istockphoto.com/id/1495337064/es/foto/retrato-del-ceo-sonriente-en-un-lugar-de-trabajo-de-oficina-moderno-en-traje.jpg?s=612x612&w=0&k=20&c=IQr8imMe_-s8cS37FcA2LSZG24cJHhbvam63eS1UiUg=',
        'https://media.istockphoto.com/id/1413766112/es/foto/exitoso-hombre-de-negocios-maduro-mirando-a-la-c%C3%A1mara-con-confianza.jpg?s=612x612&w=0&k=20&c=_wh29d41PN8a3GlqANKphBMIkN2P-QI4KPPIM7bVvDA=',
        'https://media.istockphoto.com/id/1354898581/es/foto/foto-de-un-joven-empresario-usando-una-computadora-port%C3%A1til-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=ill7Gebgk_9_xh-pai6iODyhz1x644E_WhwzZgVbS6I=',
        'https://media.istockphoto.com/id/1636023306/es/foto/retrato-de-un-joven-empresario-hispano-dentro-de-la-oficina-jefe-en-traje-de-negocios.jpg?s=612x612&w=0&k=20&c=gPJXKniQF2mHaPjC55--A2dNuhYaKRTonmUsXP5WLx4=',
        'https://media.istockphoto.com/id/1370020940/es/foto/retrato-de-empresario-de-%C3%A9xito.jpg?s=612x612&w=0&k=20&c=r2-oFzMTgIo1CYKN_oSu-CJZztfSGKj6ylIt--nwXRA=',
        'https://media.istockphoto.com/id/1435745704/es/foto/retrato-de-un-sonriente-hombre-de-negocios-adulto-medio-parado-en-la-oficina-corporativa.jpg?s=612x612&w=0&k=20&c=7QppbLJjVPWCOw0PupJc_qNMvTp7Pwrq7ue_FhuS5gU=',
        'https://media.istockphoto.com/id/1488389611/es/foto/sonrisa-liderazgo-y-retrato-de-hombre-negro-ceo-seguro-de-s%C3%AD-mismo-con-maqueta-y-fondo-borroso.jpg?s=612x612&w=0&k=20&c=cYE33T94b_8IB04UAlSWZqSZ581iWw6I2NkljTutgdg='
    ];
  imagenesMujeres = [
        'https://media.istockphoto.com/id/2099403180/es/foto/mujer-de-negocios-risue%C3%B1a-de-pie-con-los-brazos-cruzados-contra-la-pared-de-una-oficina.jpg?s=612x612&w=0&k=20&c=SmPSzyS-h8Q7MVZt1bi5IeJbjJTav4dSyOBH9P8aXoc=',
        'https://media.istockphoto.com/id/1398385367/es/foto/feliz-mujer-de-negocios-millennial-con-gafas-posando-con-las-manos-cruzadas.jpg?s=612x612&w=0&k=20&c=pgJoHs698wY3npJz7AyxosicITYgSDo0G6fxbT5Bwa0=',
        'https://media.istockphoto.com/id/1369508766/es/foto/hermosa-mujer-latina-exitosa-sonriendo.jpg?s=612x612&w=0&k=20&c=f-3MdwiVjpE4UWQdqLC3vpWViYMCiGUPr5aKLCmTnDI=',
        'https://media.istockphoto.com/id/1401557224/es/foto/mujer-de-negocios-segura-de-s%C3%AD-misma-en-la-oficina-moderna.jpg?s=612x612&w=0&k=20&c=uNw2KkZ8D8-FDubjiAPGMSE7Zl1ZcQ6gXvCau5WVAP4=',
        'https://media.istockphoto.com/id/1591926305/es/foto/retrato-de-una-mujer-profesional-con-traje-mujer-de-negocios-parada-en-una-oficina.jpg?s=612x612&w=0&k=20&c=n-TqAXJHizp3tJgFXQ3cQcN4mOnnLF4zg848tHx2tFA=',
        'https://media.istockphoto.com/id/1308882664/es/foto/retrato-de-estudio-de-una-joven-empresaria-seria-con-los-brazos-cruzados-contra-el-fondo-llano.jpg?s=612x612&w=0&k=20&c=n-md4iRpTAFgN2Bdl3ZUX-hYrYuVPlr9bqOxNOVM_UM=',
        'https://media.istockphoto.com/id/1326211139/es/foto/retrato-de-una-joven-empresaria-segura-de-s%C3%AD-misma-que-trabaja-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=APIaa2oSg2jcvp9CpiSd6W4E-JzZip3panI6mU-JQ00=',
        'https://media.istockphoto.com/id/2150868016/es/foto/retrato-de-una-sonriente-mujer-de-negocios-con-una-tableta-digital-de-pie-en-la-oficina.jpg?s=612x612&w=0&k=20&c=EuCuhzhDY82cvWMEp3sDNKQhlrfpHTVDIlY6PmhBIMQ=',
        'https://media.istockphoto.com/id/1987655119/es/foto/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=BSgEl7Udve77L_J2gjA2LytCTvy_GxVYUX9-i9dVQpM=',
        'https://media.istockphoto.com/id/1281083606/es/foto/foto-de-atractiva-se%C3%B1ora-encantadora-lindo-peludo-brazos-cruzados-persona-segura-de-s%C3%AD-mismo.jpg?s=612x612&w=0&k=20&c=H1UrO3iS28lOLOq8AOiVdwHb4vNkNSEKhK9qwZlXVTs=',
        'https://media.istockphoto.com/id/1593909818/es/foto/feliz-mujer-de-negocios-segura-en-la-oficina-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=M6OaUaJk_u8yfPp1JLg9roj51WUC4gIYbILANueNol0=',
        'https://media.istockphoto.com/id/1355515310/es/foto/mujer-de-negocios-exitosa-usando-una-tableta-en-la-oficina.jpg?s=612x612&w=0&k=20&c=qhi9kEnf2lA1e4aE3faLlNFo3Yzcwo4VqsgEv3nuxMg=',
        'https://media.istockphoto.com/id/1386866479/es/foto/sonriente-y-segura-de-s%C3%AD-misma-joven-empresaria-auditora-escribiendo-en-el-portapapeles.jpg?s=612x612&w=0&k=20&c=Tq6wZfFTahIJzSkTOSVITwmo6yi0htrStd3UbknfxHs=',
        'https://media.istockphoto.com/id/1629541271/es/foto/sonrisa-brazos-cruzados-y-retrato-de-una-mujer-en-el-trabajo-por-orgullo-empresarial-y.jpg?s=612x612&w=0&k=20&c=zdWT_vEn-J3j-IaEceKWxjyZjDPE4VrseUPf5C_CijA=',
        'https://media.istockphoto.com/id/1496615448/es/foto/retrato-de-hermosa-ni%C3%B1a-hispana-aislada-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=OBtiXAf4SzTgmn2UrfvR6jk6Tuu175QBexxUww1IQck=',
        'https://media.istockphoto.com/id/1915382108/es/foto/gerente-de-la-dama-cauc%C3%A1sica-milenaria-confiada-y-amigable-sonriente-maestra-en-ropa-formal.jpg?s=612x612&w=0&k=20&c=XzkMX37ma5sOsY7MyjFrFPTCtBceOx2yjjFyiOAxfuU=',
        'https://media.istockphoto.com/id/1487508210/es/foto/retrato-de-una-joven-segura-de-s%C3%AD-misma-de-pie-en-el-espacio-de-los-creadores.jpg?s=612x612&w=0&k=20&c=UkbXRrpage0mY8ZlqB_P8dHvNJs1aE4Yf83_NaZ-uP0=',
        'https://media.istockphoto.com/id/1289220949/es/foto/mujer-sonriente-exitosa-con-gafas-en-la-pared-gris.jpg?s=612x612&w=0&k=20&c=vH5cbmaJoJHJ_BWv9IBF1wri-4GwbhGrmJVcGcEhkCk=',
        'https://media.istockphoto.com/id/1365606632/es/foto/foto-de-una-joven-empresaria-usando-una-tableta-digital-mientras-est%C3%A1-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=2KzjQfY7LZ6cYujFuJhokbySJJBPI0H4jkvlXLy1oZQ=',
        'https://media.istockphoto.com/id/1317889905/es/foto/foto-de-una-joven-empresaria-usando-una-tableta-digital-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=YKDXaqXhRZAgyP7KknWLZYOiwZZbiK8c2uqWYLfqlfU=',
        'https://media.istockphoto.com/id/961097602/es/foto/mujer-sonriente-de-pie-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=pLrO_piMLY_6-6HANvQWioR1DakFKe3QH0Yq5QieNoM=',
        'https://media.istockphoto.com/id/1411012107/es/foto/mujer-de-negocios-madura-sonriendo-mientras-est%C3%A1-de-pie-con-los-brazos-cruzados-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=F0wMRxe1ZlkUfhSVgpfDU7Uldx7Tv8TY7XlJm2ZUYNY='
    ];

  private apiUrl = 'http://localhost:8090/duenos';
  constructor(private http: HttpClient) {
    this.generarDuenos();
  }

  private generarDuenos(): void {
    let idMascota = 1;
    for (let i = 1; i <= 50; i++) {
      const esHombre = i % 2 === 0;
      const nombre = esHombre
        ? `${this.nombresHombres[i % this.nombresHombres.length]} ${this.apellidos[i % this.apellidos.length]}`
        : `${this.nombresMujeres[i % this.nombresMujeres.length]} ${this.apellidos[i % this.apellidos.length]}`;

      const imagenUrl = esHombre
        ? this.imagenesHombres[i % this.imagenesHombres.length]
        : this.imagenesMujeres[i % this.imagenesMujeres.length];

      const mascotas = [];
      for (let j = 0; j < 2; j++) { // 2 mascotas por dueño
        mascotas.push({
          mascotaId: idMascota++,
          nombre: `Mascota${idMascota}`,
          especie: j % 2 === 0 ? 'Perro' : 'Gato',
          edad: Math.floor(Math.random() * 15) + 1,
          peso: +(Math.random() * 30 + 1).toFixed(2),
          enfermedad: 'Ninguna',
          imagenUrl,
          estado: Math.random() > 0.5 ? 'Activo' : 'Inactivo',
        });
      }

      this.duenos.push({
        id: i + 1,
        cedula: 10000000 + i,
        nombre,
        email: `${nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ /g, '')}@email.com`,
        telefono: 3000000000 + i,
        imagenUrl,
        password: Math.random().toString(36).slice(-8)
      });
    }
  }

  obtenerTodos(): Observable<Dueno[]> {
    return this.http.get<Dueno[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Dueno> {
    return this.http.get<Dueno>(`${this.apiUrl}/${id}`);
  }

  obtenerPorCedula(cedula: string): Observable<Dueno> {
    return this.http.get<Dueno>(`${this.apiUrl}/${cedula}`);
  }

  guardarDueno(dueno: Dueno): Observable<Dueno> {
    return this.http.post<Dueno>(this.apiUrl, dueno);
  }

  actualizarDueno(id: number, dueno: Dueno): Observable<Dueno> {
    return this.http.put<Dueno>(`${this.apiUrl}/${id}`, dueno);
  }

  eliminarDueno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}