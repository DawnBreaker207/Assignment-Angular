import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrl: './popular-product.component.css',
})
export class PopularProductComponent {
  constructor(private ProductsService: ProductsService) {}
  products: Product[] = [];
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
}
