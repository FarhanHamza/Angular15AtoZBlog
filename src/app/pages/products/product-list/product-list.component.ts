import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {

  }

  @Input() product_List : Product[] = [];
  @Output() delProduct:any = new EventEmitter();
  @Output() editProduct: any = new EventEmitter();

  deleteProductClick(product: Product){
    console.log(product);
    this.delProduct.emit(product);
  }


  editProductClick(product: Product){
    this.editProduct.emit(product);
  }

}
