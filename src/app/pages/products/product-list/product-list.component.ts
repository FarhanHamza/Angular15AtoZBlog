import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {}

  @Input() product_List: Product[] = [];
  @Input() originalProductList: Product[] = []; // Add this property

  @Output() delProduct: any = new EventEmitter();
  @Output() editProduct: any = new EventEmitter();

  searchProduct: any;
  search(name: string) {
    debugger;
    if (name) {
      this.product_List = this.originalProductList.filter((item: any) =>
        item.productName.includes(name)
      );
    } else {
      // this.product_List = [...this.originalProductList]; // Restore the original product list
      this.product_List =this.originalProductList; // Restore the original product list
    }
  }

  deleteProductClick(product: Product) {
    console.log(product);
    this.delProduct.emit(product);
  }

  editProductClick(product: Product) {
    this.editProduct.emit(product);
  }
}
