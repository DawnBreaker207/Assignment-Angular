import { Component } from '@angular/core';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.css',
})
export class RelatedProductComponent {
  products: any = [
    {
      name: 'Wireless headphones',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Play game',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Tablet as a laptop',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Wireless headphones',
      price: '$11,70',
      image: '',
    },
  ];
}
