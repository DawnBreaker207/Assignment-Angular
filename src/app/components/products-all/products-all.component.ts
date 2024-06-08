import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interfaces/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CategoryService } from '../../category.service';
import { Category } from '../../../interfaces/Category';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent {
  constructor(
    private ProductsService: ProductsService,
    private CategoryService: CategoryService,
    private SearchService: SearchService
  ) {}
  filterForm = new FormGroup({
    categories: new FormControl(''),
    checkBox: new FormControl(''),
  });
  products: Product[] = [];
  productFilter: any;
  categories: Category[] = [];
  router = new Router();
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      console.log(data);

      this.products = data;
    });
    this.CategoryService.Get_All_Product().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  onFilter = (event: any) => {
    const trueCheck = event.target.checked;
    if (trueCheck) {
      const check = event.target.id;
      this.filterForm.patchValue({
        categories: check,
      });
      const categories = this.filterForm.get('categories')?.value;
      this.SearchService.Filter(categories).subscribe((data) => {
        console.log(data);

        this.productFilter = data as Product;
        console.log(this.productFilter);
      });
    }
  };
}
