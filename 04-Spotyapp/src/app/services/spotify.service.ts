import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private spotify: HttpClient ) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD-i6PwFOLS5tLVMEfSUXKYxjXBfwphVe4whVpyRtZeL_Ia8XRE8RgPv3XdXbUw9rtUwDZXIsdh7zYMS6Y'
    });

    return this.spotify.get( url, { headers }) ;
  }

  getNewRelease() {

    return this.getQuery( 'browse/new-releases' )
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }

  getArtistas( termino: string ) {

    return this.getQuery( `search?q=${termino}&type=artist&limit=15` )
      .pipe( map( data => {
        return data['artists'].items;
      }));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks']));
  }
}
