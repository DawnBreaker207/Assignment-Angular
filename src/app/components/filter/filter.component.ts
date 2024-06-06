import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interfaces/Product';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  constructor(
    private route: ActivatedRoute,
    private SearchService: SearchService
  ) {}
  filterForm = new FormGroup({
    categories: new FormControl(''),
  });
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
  router = new Router();
  products: any = [];
  ngOnInit() {
    const categories = this.route.snapshot.queryParams['keywords'];
    this.SearchService.Filter(categories).subscribe((data) => {
      this.products = data;
    });
  }
  onFilter = () => {
    const kw = this.filterForm.controls.categories.value;
    this.router.navigate(['filter'], { queryParams: { keywords: kw } });
  };
}
