import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent {
  constructor(private ProductsService: ProductsService) {}
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
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
}
