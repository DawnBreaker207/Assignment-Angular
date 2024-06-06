import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css',
})
export class ProductsCardsComponent {
  @Input() product: Product = {} as Product;
  check: boolean = true;
  stars: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
}
