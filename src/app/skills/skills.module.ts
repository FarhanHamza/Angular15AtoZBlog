import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkDotNetComponent } from './sk-dot-net/sk-dot-net.component';

import { UiuxComponent } from './uiux/uiux.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skill-component/skills.component';
import { SkillHeaderComponent } from './skill-component/skill-header/skill-header.component';



@NgModule({
  declarations: [
    SkDotNetComponent,
    SkillsComponent,
    UiuxComponent,
    SkillHeaderComponent
  ],
  imports: [
    CommonModule, 
    SkillsRoutingModule,
    RouterModule
  ]
})
export class SkillsModule { }
