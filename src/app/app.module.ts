import { SharedModule } from 'src/app/shared/shared.module';
import { ResuableCompDetail29Component } from './lectures/ReuableComponent29/ResuableCompDetail29.component';
import { ElseifComponent } from './lectures/elseif/elseif.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingModule } from './building/building.module';

import { Events11Component } from './lectures/events11/events11.component';
import { Getinputboxvalue12Component } from './lectures/getinputboxvalue12/getinputboxvalue12.component';
import { CouterComponent } from './lectures/couter/couter.component';
import { Stylesrule14Component } from './lectures/stylesrule14/stylesrule14.component';
import { Propertybind15Component } from './lectures/propertybind15/propertybind15.component';
import { Ifelse16Component } from './lectures/ifelse16/ifelse16.component';
import { Switchcase18Component } from './lectures/switchcase18/switchcase18.component';
import { Ngfor19Component } from './lectures/ngfor19/ngfor19.component';

import { Nestedforloop20Component } from './lectures/nestedforloop20/nestedforloop20.component';
import { Stylebinding21Component } from './lectures/stylebinding21/stylebinding21.component';
import { HeaderComponent } from './lectures/header/header.component';
import { ToggleelementComponent } from './lectures/toggleelement/toggleelement.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ngbootstrap25Component } from './lectures/ngbootstrap25/ngbootstrap25.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Matui26Component } from './lectures/matui26/matui26.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { Todolist27Component } from './lectures/todolist27/todolist27.component';
import { ChildComponent } from './lectures/child/child.component';
import { CheckpassdataComponent } from './lectures/checkpassdata/checkpassdata.component';
import { ChildtoparentComponent } from './lectures/childtoparent/childtoparent.component';
import { RouterModule } from '@angular/router';
import { SkillsModule } from './skills/skills.module';
import { ChildtoparentAIComponent } from './lectures/childtoparent-ai/childtoparent-ai.component';
import { Twowaybind31Component } from './lectures/twowaybind31/twowaybind31.component';
import {FormsModule} from "@angular/forms";
import { Temprefvar32Component } from './lectures/temprefvar32/temprefvar32.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductsModule } from './pages/products/products.module';
import { IsActivePipe } from './shared/pipes/is-active.pipe';
import { ErrorComponent } from './shared/components/error/error.component';
import { Basictypescript33Component } from './lectures/basictypescript33/basictypescript33.component';

@NgModule({
  declarations: [
    AppComponent,
    Events11Component,
    Getinputboxvalue12Component,
    CouterComponent,
    Stylesrule14Component,
    Propertybind15Component,
    Ifelse16Component,
    ElseifComponent,
    Switchcase18Component,
    Ngfor19Component,
    Nestedforloop20Component,
    Stylebinding21Component,
    HeaderComponent,
    ToggleelementComponent,
    Matui26Component,
    Todolist27Component,
    ChildComponent,
    ResuableCompDetail29Component,
    CheckpassdataComponent,
    ChildtoparentComponent,
    ChildtoparentAIComponent,
    Twowaybind31Component,
    Temprefvar32Component,
    BreadcrumbComponent,
    // ErrorComponent,   // removed from Here
     Basictypescript33Component,


  ],
  imports: [

    SharedModule,
    // FormsModule, // Removed from Here
    BrowserModule,
    // BuildingRoutingModule,
    BrowserAnimationsModule,
    // CommonModule, // Removed from Here
    //#region MAT 
    // ng-bootstrap
    NgbModule,
    Ngbootstrap25Component,
    //MAT-UI
    MatSlideToggleModule,
    MatBadgeModule,
    
    //#endregion
    
    
    BuildingModule,
    RouterModule,
    SkillsModule,
    AppRoutingModule,
    
    // Product Modules
    ProductsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
