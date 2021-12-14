import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TracksAlbum, TracksDatum } from '../../interfaces/deezer';
import { switchMap } from 'rxjs/operators';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  idCancion:number=0
  cancionesAlbum!:TracksAlbum
 

  constructor(private activatedRoute:ActivatedRoute,
              private deezer:DeezerService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.deezer.obtenerCancionesPorAlbum(id) )
    ).subscribe(
      (data)=> {this.cancionesAlbum=data;
      console.log(this.cancionesAlbum);
      

      })
   
  }
  traerSong(termino:any){
    this.idCancion=termino
 }
  volver(){
    this.router.navigateByUrl("/")
  }
}
