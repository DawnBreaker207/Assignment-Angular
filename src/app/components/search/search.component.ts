import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../search.service';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(
    private route: ActivatedRoute,
    private SearchService: SearchService
  ) {}
  products: any = [];
  kw: string = '';
  ngOnInit() {
    const keywords = this.route.snapshot.queryParams['keywords'];
    this.kw = keywords;
    this.SearchService.Search(keywords).subscribe((data) => {
      this.products = data;
    });
  }
}
