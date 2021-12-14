import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DeezerService } from '../../services/deezer.service';
import { Data, Datum, DatumAl } from '../../interfaces/deezer';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  idCancion:number=0
  resultadosAlbum!:Datum[]
  resultadosAlbumes!:DatumAl[]
  termino:string=''
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>
  constructor(private deezer:DeezerService,
              private router:Router) { }

  ngOnInit(): void {
  }
  buscar(){
    this.termino=this.txtBuscar.nativeElement.value;
    this.deezer.obtenerPorNombre(this.termino)
    .subscribe(({data})=> { 
    this.resultadosAlbum=data.splice(0,4),
    this.deezer.obtenerPorAlbum(this.termino).subscribe(({data})=>this.resultadosAlbumes=data.splice(0,4))})

  }
  traerSong(termino:any){
     this.idCancion=termino
  }
  verAlbum(termino:number){

    this.router.navigateByUrl(`/${termino}`);

  }
}
