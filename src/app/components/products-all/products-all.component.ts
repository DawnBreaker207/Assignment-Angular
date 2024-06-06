import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interfaces/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent {
  constructor(private ProductsService: ProductsService) {}
  filterForm = new FormGroup({
    categories: new FormControl(''),
  });
  categories: any = [
    {
      name: 'Categories',
      reset: 10,
    },
    {
      name: 'Tablet',
      reset: 5,
    },
    {
      name: 'Laptop',
      reset: 5,
    },
    {
      name: 'Headphones',
      reset: 5,
    },
    {
      name: 'Console',
      reset: 5,
    },
    {
      name: 'other',
      reset: 5,
    },
  ];
  products: Product[] = [];
  router = new Router();
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
  onFilter = () => {
    const kw = this.filterForm.controls.categories.value;
    this.router.navigate(['filter'], { queryParams: { keywords: kw } });
  };
}
