import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../interfaces/Product';
import { Category } from '../../../../interfaces/Category';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css',
})
export class ProductsAddComponent {
  constructor(
    private ProductsService: ProductsService,
    private CategoryService: CategoryService
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    categories: new FormControl('Default'),
    // image: new FormControl(null, Validators.required),
  });

  categories: Category[] = [];
  ngOnInit() {
    this.CategoryService.Get_All_Product().subscribe((data) => {
      this.categories = data;
    });
  }

  onSubmit = () => {
    this.ProductsService.Add_Product(
      this.productForm.value as Product
    ).subscribe((data) => {
      console.log(data);
    });
  };
}
