import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  constructor(public sanitizer: DomSanitizer) {}

  heroSection: any = [
    {
      id: 1,
      title: 'Speaker',
      image: '',
      quantity: 6,
    },
    {
      id: 2,
      title: 'Desktop & laptop',
      image: '',
      quantity: 6,
    },
    {
      id: 3,
      title: 'DSLR camera',
      image: '',
      quantity: 6,
    },
  ];
}
