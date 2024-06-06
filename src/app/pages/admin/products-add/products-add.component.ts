import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../interfaces/Product';
import { Category } from '../../../../interfaces/Category';
import { CategoryService } from '../../../category.service';
import { UploadService } from '../../../upload.service';
import { Images, ImgRes } from '../../../../interfaces/Images';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css',
})
export class ProductsAddComponent {
  constructor(
    private ProductsService: ProductsService,
    private CategoryService: CategoryService,
    private UploadService: UploadService
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    categories: new FormControl('Default'),
    image: new FormControl(),
  });

  categories: Category[] = [];
  images!: string;
  ngOnInit() {
    this.CategoryService.Get_All_Product().subscribe((data) => {
      this.categories = data;
    });
  }
  onChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      this.UploadService.Upload(files).subscribe((data: ImgRes) => {
        if (data.secure_url && data) {
          this.images = data.secure_url;
          this.productForm.patchValue({
            image: this.images,
          });
          this.productForm.value;
        }
      });
    }
  }
  router = new Router();
  onSubmit = () => {
    const productData = this.productForm.value as Product;

    this.ProductsService.Add_Product(productData).subscribe((data) => {
      this.router.navigate(['admin']);
    });
  };
}
