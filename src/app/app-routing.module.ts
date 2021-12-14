import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './music/principal/principal.component';
import { AlbumComponent } from './music/album/album.component';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: ':id',
    component: AlbumComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
