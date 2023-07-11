import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.create();
    // Swal.fire({
    //   title: 'Sweet!',
    //   text: 'Modal with a custom image.',
    //   imageUrl: 'https://unsplash.it/400/200',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image',
    // })
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }
  // For edit/Update
  showAddBtn: boolean = true;
  showUpdateBtn: boolean;
  currentId: number;

  form: FormGroup;
  // CreateForm
  //pattern(/^\S*$/) -- SPACE
  // pattern(/^[1-9]$/)
  create() {
    this.form = this.formBuilder.group({
      id: [null],
      productName: [null, [Validators.required]],
      price: [
        null,
        [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/)],
      ],
      isActive: [false],
    });
  }
  get f() {
    return this.form.controls;
  }

  isRequired(fieldName: string): boolean {
    const control = this.f[fieldName];
    return control?.errors?.['required'] && control?.touched;
  }

  productList: Product[] = [];

  isFormSubmit = false;
  // submit form

  submitProductForm() {
    debugger;
    this.f['productName'].touched;
    this.isFormSubmit = true;
    if (this.form.invalid) {
      return;
    }
    const isAlreadyExist = this.productList.find(
      (item: Product) => item.productName === this.f['productName'].value
    );
    if (isAlreadyExist) {
      Swal.getTimerLeft();
      Swal.fire(
        `Product`,
        `'${isAlreadyExist.productName}' \ is alraedy exist in list`
      );
      return;
    }

    Swal.fire(`Product`, `${JSON.stringify(this.form.value)}`, 'question');

    this.productList.push({
      id: this.productList.length +1,
      productName: this.form.value['productName'],
      price: this.form.value['price'],
      isActive: this.form.value['isActive'],
    });

    this.create();
    this.isFormSubmit = false;
  }

  // Delete Current Product
  deleteCurrentProduct(product: Product) {
    debugger;
    /*   const index = this.productList.indexOf(product);
    if (index != -1) {
    this.productList.splice(index, 1);
    } */

    // let short Hand
    this.productList = this.productList.filter(
      (item: Product) => item.productName != product.productName
    );
  }

  editProduct(product: Product) {
    debugger;
    this.currentId = product.id;
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.form.setValue(product);
    return;
  }

  updateProduct() {
    let index = this.productList.findIndex((p: Product) => p.id === this.currentId);
    if (index === -1) {
      console.log("Product not found"); 
     return;
    }

    // updating values on index:
    this.productList[index].productName = this.f['productName'].value;
    this.productList[index].price = this.f['price'].value;
    this.productList[index].isActive = this.f['isActive'].value;

    this.showAddBtn = true;
    this.showUpdateBtn = false;
    this.create();
    Swal.fire("Product", `Product Updated!`, "success")
  }
}
