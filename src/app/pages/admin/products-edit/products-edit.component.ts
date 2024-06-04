import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { Product } from '../../../../interfaces/Product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css',
})
export class ProductsEditComponent {
  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // image: new FormControl(''),
  });
  router = new Router();
  products: Product = {} as Product;
  productId = this.route.snapshot.params['id'];
  ngOnInit() {
    this.ProductsService.Get_Id_Product(this.productId).subscribe((data) => {
      this.products = data;
      this.productForm.controls.name.setValue(data.name);
      this.productForm.controls.price.setValue(data.price);
    });
  }
  onSubmit = () => {
    this.ProductsService.Update_Product(
      this.productId,
      this.productForm.value as Product
    ).subscribe((data) => {
      this.router.navigate(['admin/dashboard'])
    });
  };
}
