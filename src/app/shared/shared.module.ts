import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { IsActivePipe } from './pipes/is-active.pipe';
import { ProductListComponent } from '../pages/products/product-list/product-list.component';

@NgModule({
  declarations: [
    // Component  ⬇
    ProductListComponent,
    ErrorComponent,
    // Pipes ⬇
    IsActivePipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // modules 🚀
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // components 🚀
    ProductListComponent,
    ErrorComponent,

    // pipes 🚀
    IsActivePipe,
  ],
})
export class SharedModule {}
