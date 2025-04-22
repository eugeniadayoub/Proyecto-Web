import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { DuenosService } from './duenos.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private mascotas: Mascota[] = [];
  private apiUrl = 'http://localhost:8090/api/mascotas';

  constructor(private duenoService: DuenosService, private http: HttpClient) {
    this.generarMascotas();
  }

  private generarMascotas(): void {
    const nombres = ['Luna', 'Simba', 'Coco', 'Rocky', 'Bella', 'Max', 'Milo', 'Toby', 'Rex', 'Nala', 
        'Kira', 'Loki', 'Bruno', 'Daisy', 'Chester', 'Sasha', 'Thor', 'Boby', 'Zeus', 'Canela', 
        'Maya', 'Apolo', 'Tina', 'Bobby', 'Fiona', 'Terry', 'Romeo', 'Mimi', 'Odin', 'Leia'];
    const enfermedades = [
      'Ninguna', 'Alergia alimentaria', 'Parvovirus', 'Displasia de cadera', 'Artrosis', 'Infección en el oído',
        'Moquillo canino', 'Insuficiencia renal', 'Hipotiroidismo', 'Leishmaniasis', 'Gastroenteritis', 'Epilepsia',
        'Otitis', 'Diabetes', 'Anemia', 'Tumor mamario', 'Pancreatitis', 'Obesidad', 'Leucemia felina', 'Rabia'
    ];
    const imagenesPerros = [
        'https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg', 'https://cdn.pixabay.com/photo/2020/11/22/20/12/schafer-dog-5767834_1280.jpg', 
        'https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg', 'https://cdn.pixabay.com/photo/2016/11/29/11/26/dog-1869167_1280.jpg', 
        'https://cdn.pixabay.com/photo/2017/03/27/13/23/dog-2178696_1280.jpg', 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg', 'https://cdn.pixabay.com/photo/2016/10/26/22/02/dog-1772759_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087_1280.jpg', 'https://cdn.pixabay.com/photo/2016/11/23/18/06/dog-1854119_1280.jpg', 
        'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg', 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277414_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/10/15/12/01/dog-1742295_1280.jpg', 'https://cdn.pixabay.com/photo/2014/03/14/20/13/dog-287420_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg', 'https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg', 'https://cdn.pixabay.com/photo/2017/02/01/09/48/jack-russell-2029214_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/07/17/23/01/dog-6474269_1280.jpg', 'https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_1280.jpg', 'https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/04/07/05/39/labrador-retriever-6158095_1280.jpg', 'https://cdn.pixabay.com/photo/2021/08/18/22/42/australian-shepherd-6556697_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/07/09/17/42/dog-7311407_1280.jpg', 'https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_1280.jpg', 'https://cdn.pixabay.com/photo/2021/07/05/14/07/dog-6389277_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg', 'https://cdn.pixabay.com/photo/2018/05/09/16/15/dog-3385541_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg', 'https://cdn.pixabay.com/photo/2015/05/24/22/33/german-longhaired-pointer-782498_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/29/09/58/dog-1868871_1280.jpg', 'https://cdn.pixabay.com/photo/2022/01/17/19/59/dog-6945696_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/08/21/19/39/greyhound-6563435_1280.jpg', 'https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/13/08/07/dalmatians-765138_1280.jpg', 'https://cdn.pixabay.com/photo/2023/03/18/17/48/basset-hound-7861037_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/29/01/24/dog-1866530_1280.jpg', 'https://cdn.pixabay.com/photo/2023/04/28/14/35/dog-7956828_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/10/01/12/27/border-collie-8287329_1280.jpg', 'https://cdn.pixabay.com/photo/2019/08/07/14/10/golden-retriever-4390884_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_1280.jpg', 'https://cdn.pixabay.com/photo/2020/11/20/16/26/labrador-5762115_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/05/09/23/02/dog-2299482_1280.jpg', 'https://cdn.pixabay.com/photo/2017/09/25/13/11/dog-2785066_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/03/02/14/46/pit-bull-7825554_1280.jpg', 'https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_1280.jpg', 'https://cdn.pixabay.com/photo/2022/04/12/19/35/dog-7128749_1280.jpg'
    ];
    const imagenesGatos = [
      'https://cdn.pixabay.com/photo/2023/08/18/01/32/cat-8197577_1280.jpg', 'https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg', 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/10/11/12/31/cat-3739702_1280.jpg', 'https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg',
        'https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232_1280.jpg', 'https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/08/17/18/38/cat-5496162_1280.jpg', 'https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/05/04/14/14/cat-5129332_1280.jpg', 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/07/22/15/21/cat-2528935_1280.jpg', 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/05/14/21/43/british-shorthair-3401683_1280.jpg', 'https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_1280.jpg', 'https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/09/17/13/59/cat-5579221_1280.jpg', 'https://cdn.pixabay.com/photo/2020/11/26/11/48/cat-5778777_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/06/04/14/14/cat-6309964_1280.jpg', 'https://cdn.pixabay.com/photo/2022/03/27/11/23/cat-7094808_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/07/08/14/16/cat-3523992_1280.jpg', 'https://cdn.pixabay.com/photo/2014/06/03/01/31/cat-360807_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_1280.jpg', 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/11/02/10/46/cat-6762936_1280.jpg', 'https://cdn.pixabay.com/photo/2018/06/28/14/12/cat-3504008_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/18/21/57/animal-1837067_1280.jpg', 'https://cdn.pixabay.com/photo/2019/06/08/17/02/cat-4260536_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/08/07/12/27/cat-2603300_1280.jpg', 'https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_1280.jpg', 'https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/11/22/17/28/cat-5767334_1280.jpg', 'https://cdn.pixabay.com/photo/2019/12/17/16/06/cat-4701934_1280.jpg',
        'https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345_1280.jpg', 'https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg', 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg', 'https://cdn.pixabay.com/photo/2016/11/19/21/09/cat-1841202_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/04/07/07/14/cat-7905702_1280.jpg', 'https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/05/19/19/43/cat-8005275_1280.jpg', 'https://cdn.pixabay.com/photo/2021/07/15/10/47/cat-6468112_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_1280.jpg', 'https://cdn.pixabay.com/photo/2015/11/15/20/21/cat-1044750_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/03/09/20/02/cat-7840767_1280.jpg', 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg'
    ];

    const duenos = this.duenoService.obtenerTodos();
    let mascotaId = 1;

    this.duenoService.obtenerTodos().subscribe(duenos => {
      for (let i = 0; i < nombres.length; i++) {
        const tipo = i % 2 === 0 ? 'Perro' : 'Gato';
        const imagen = tipo === 'Perro'
          ? imagenesPerros[i % imagenesPerros.length]
          : imagenesGatos[i % imagenesGatos.length];
  
        const mascota: Mascota = {
          mascotaId: i + 1,
          nombre: nombres[i],
          especie: tipo,
          edad: Math.floor(Math.random() * 15) + 1,
          enfermedad: enfermedades[mascotaId % enfermedades.length],
          imagenUrl: imagen,
          estado: Math.random() < 0.5 ? 'Activo' : 'Inactivo',
          peso: Math.round((Math.random() * 30 + 1) * 100) / 100,
          dueno: duenos[i % duenos.length] // se asigna un dueño aleatorio
        };
  
        this.mascotas.push(mascota);
      }
    });
  }
  obtenerTodas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.apiUrl}/${id}`);
  }

  agregarMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.apiUrl, mascota);
  }

  actualizarMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, mascota);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}