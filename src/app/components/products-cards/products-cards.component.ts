import { Component } from '@angular/core';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css',
})
export class ProductsCardsComponent {
  check: boolean = true;
  stars: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
}
