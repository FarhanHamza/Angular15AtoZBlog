import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ngfor19Component } from './lectures/ngfor19/ngfor19.component';
import { Ifelse16Component } from './lectures/ifelse16/ifelse16.component';
import { ToggleelementComponent } from './lectures/toggleelement/toggleelement.component';


const routes: Routes = [
  // {
  //   path: "", component: Ngfor19Component
  // },
  // {
  //   path: "ifelse", component: Ifelse16Component
  // },
  // {
  //   path: "**", component: ToggleelementComponent
  // },
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
