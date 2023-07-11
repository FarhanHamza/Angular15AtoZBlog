import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductsComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { IsActivePipe } from 'src/app/shared/pipes/is-active.pipe';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddProductsComponent,
    // ProductListComponent,
    // ErrorComponent,

    // pipe import
    // IsActivePipe  
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule
  ], 
  exports: [
    // IsActivePipe
  ]
})
export class ProductsModule { }
