import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.css',
})
export class RelatedProductComponent {
  constructor(private ProductsService: ProductsService) {}
  products: any = [];
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
}
