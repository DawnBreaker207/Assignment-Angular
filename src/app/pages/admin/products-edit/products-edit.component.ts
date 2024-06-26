import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { Product } from '../../../../interfaces/Product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css',
})
export class ProductsEditComponent {
  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute,
    private CategoryService: CategoryService
  ) {}

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    categories: new FormControl('Default'),
    // image: new FormControl(''),
  });
  router = new Router();
  products: Product = {} as Product;
  categories: Product[] = [];
  productId = this.route.snapshot.params['id'];
  ngOnInit() {
    this.ProductsService.Get_Id_Product(this.productId).subscribe((data) => {
      this.products = data;
      this.productForm.controls.name.setValue(data.name);
      this.productForm.controls.price.setValue(data.price);
      this.productForm.controls.categories.setValue(data.categories);
    });
    this.CategoryService.Get_All_Product().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit = () => {
    this.ProductsService.Update_Product(
      this.productId,
      this.productForm.value as Product
    ).subscribe((data) => {
      this.router.navigate(['admin']);
    });
  };
}
