import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrl: './popular-product.component.css',
})
export class PopularProductComponent {
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
    {
      name: 'Wireless headphones',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Tablet as a laptop',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Play game',
      price: '$11,70',
      image: '',
    },
  ];
}
