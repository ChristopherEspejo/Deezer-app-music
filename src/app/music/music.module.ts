import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { WidgetComponent } from './widget/widget.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    WidgetComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
