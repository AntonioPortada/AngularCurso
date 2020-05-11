import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string ) {
    console.log( termino );
    this.spotify.getArtistas( termino )
      .subscribe( ( data: any ) => {
        console.log(data);
        this.artistas = data;
      });
  }
}
