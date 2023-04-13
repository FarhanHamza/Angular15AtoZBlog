import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { GaragComponent } from './garag/garag.component';
import { OffieComponent } from './offie/offie.component';



@NgModule({
  declarations: [
    RoomsComponent,
    GaragComponent,
    OffieComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OffieComponent
  ]
})
export class BuildingModule { }
