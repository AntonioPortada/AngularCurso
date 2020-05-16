import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../pages/models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroes-crud-cfa68.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ) {

    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe( map( (resp: any) => {
        heroe.id = resp.name;
        return heroe;
      }));
  }

  actualizarHeroe( heroe: HeroeModel ) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  borrarHeroe( id: string ) {
    console.log(`${this.url}/heroes/${id}.json`);
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroe( id: string ) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe( map( this.crearArreglo ),
      delay(2000));
  }

  private crearArreglo( heroeObj: object ) {

    const heroes: HeroeModel[] = [];

    Object.keys( heroeObj ).forEach( key => {
      const heroe: HeroeModel = heroeObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });

    return heroes;
  }
}
