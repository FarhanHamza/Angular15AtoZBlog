import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  ngOnInit(): void {
    document.title = 'Customer';
    this.create();
    this.createSubForm();
  }

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  isFormSubmit: boolean = false;
  isSubFormSubmit: boolean = false;

  productList : any[] = []
  create() {
    this.form = this.formBuilder.group({
      id: [null],
      customerName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]], //Validators.pattern(/^[0-9]$/)
      products: [],
    });
  }

  subForm: FormGroup;
  createSubForm() {
    this.subForm = this.formBuilder.group({
      id: [null],
      productName: [null, [Validators.required]],
      isActive: [false],
    });
  }

  get f() {
    return this.form.controls;
  }

  get subF() {
    return this.subForm.controls;
  }

  submitSubForm() {
    debugger;
    this.isSubFormSubmit = true;
    if (this.subForm.invalid) {
      return;
    }
    this.productList.push({
      id: this.productList.length +1,
      productName: this.subF['productName'].value,
      isActive: this.subF['isActive'].value
    });
    
    Swal.fire('Customer', `${JSON.stringify(this.subForm.value)}`, 'info');
  }
  //  Submit main Form
  submitForm() {
    debugger;
    this.isFormSubmit = true
    if (this.form.invalid) {
      return;
    }
    Swal.fire('Customer', `${JSON.stringify(this.form.value)}`, 'info');
    this.isFormSubmit = false;
  }
}
