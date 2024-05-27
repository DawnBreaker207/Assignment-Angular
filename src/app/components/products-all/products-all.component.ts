import { Component } from '@angular/core';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent {
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
    {
      name: 'Play game',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Play game',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Play game',
      price: '$11,70',
      image: '',
    },
    {
      name: 'Play game',
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
