import { InteriordesignComponent } from './interiordesign/interiordesign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GaragComponent } from './garag/garag.component';
import { OffieComponent } from './offie/offie.component';
import { BuildingComponent } from './building.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BuilderrorComponentComponent } from './builderror-component/builderror-component.component';

const buildingRoutes: Routes = [
  { path: '', component: BuildingComponent, },
  {

    path: 'building', component: BuildingComponent,

    children: [
      {
        path: 'office', component: OffieComponent
      },
      {
        path: 'garag', component: GaragComponent
      },
      {
        path: 'room', component: RoomsComponent
      },
      {
        path: 'inter', component: InteriordesignComponent
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BuildingRoutingModule { }
