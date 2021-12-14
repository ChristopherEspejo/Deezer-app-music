import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DeezerService } from '../../services/deezer.service';
import { Track } from '../../interfaces/deezer';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  infoCancion!:Track
  @Input() idCancion=0
  constructor(private deezer:DeezerService) { }

  ngOnInit(): void {
    this.deezer.obtenerPorCancion(this.idCancion)
    .subscribe(data=>this.infoCancion=data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.deezer.obtenerPorCancion(this.idCancion)
    .subscribe(data=>this.infoCancion=data)
    
  }
 
}
