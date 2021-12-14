import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, DataAlbum, Track, TracksAlbum } from '../interfaces/deezer';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http:HttpClient) { }
  
  obtenerPorNombre(termino:string):Observable<Data>{
  
    return this.http.get<any>(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${termino}`)
  }
  obtenerPorAlbum(termino:string):Observable<DataAlbum>{
  
    return this.http.get<any>(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${termino}`)
 
  }
  obtenerPorCancion(termino:number):Observable<Track>{
  
    return this.http.get<any>(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${termino}`)
    
  }
  obtenerCancionesPorAlbum(termino:number):Observable<TracksAlbum>{
  
    return this.http.get<any>(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${termino}`)
    
  }

}
