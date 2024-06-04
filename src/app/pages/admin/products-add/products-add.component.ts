import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../interfaces/Product';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css',
})
export class ProductsAddComponent {
  constructor(private ProductsService: ProductsService) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // image: new FormControl(''),
  });
  formData= new FormData()

  onSubmit = () => {
    this.ProductsService.Add_Product(
      this.productForm.value as Product
    ).subscribe((data) => {
      console.log(data);
    });
  };
}
