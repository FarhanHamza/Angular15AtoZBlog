import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { GaragComponent } from './garag/garag.component';
import { OffieComponent } from './offie/offie.component';
import { InteriordesignComponent } from './interiordesign/interiordesign.component';



@NgModule({
  declarations: [
    RoomsComponent,
    GaragComponent,
    OffieComponent,
    InteriordesignComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OffieComponent,
    InteriordesignComponent
  ]
})
export class BuildingModule { }
