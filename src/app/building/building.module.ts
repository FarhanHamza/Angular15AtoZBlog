import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { GaragComponent } from './garag/garag.component';
import { OffieComponent } from './offie/offie.component';
import { InteriordesignComponent } from './interiordesign/interiordesign.component';
import { BuildingComponent } from './building.component';
import { RouterModule } from '@angular/router';
import { BuildingRoutingModule } from './building-routing.module';
import { BuilderrorComponentComponent } from './builderror-component/builderror-component.component';



@NgModule({
  declarations: [
    RoomsComponent,
    GaragComponent,
    OffieComponent,
    InteriordesignComponent,
    BuildingComponent,
    BuilderrorComponentComponent
  ],
  imports: [
    // CommonModule,
    // RouterModule,
    BuildingRoutingModule
  ],
  exports:[
    OffieComponent,
    InteriordesignComponent
  ]
})
export class BuildingModule { }
