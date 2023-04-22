import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SkDotNetComponent } from './sk-dot-net/sk-dot-net.component';
import { UiuxComponent } from './uiux/uiux.component';
import { SkillsComponent } from './skill-component/skills.component';

const skillRoutes: Routes = [
  {
    path: 'skill', component: SkillsComponent,
    children: [
      { path: 'dotnet', component: SkDotNetComponent },
      { path: 'uiux', component: UiuxComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(skillRoutes)
  ]
})
export class SkillsRoutingModule { }
