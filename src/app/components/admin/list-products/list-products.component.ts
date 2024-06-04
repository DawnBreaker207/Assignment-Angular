import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { Product } from '../../../../interfaces/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  constructor(private ProductsService: ProductsService) {}
  products: Product[] = [];
  ngOnInit() {
    this.ProductsService.Get_All_Product().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  onDelete = (productId: any) => {
    if (confirm('Are you sure want to delete ?')) {
      this.ProductsService.Delete_Product(productId).subscribe((data) => {
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      });
    }
  };
}
