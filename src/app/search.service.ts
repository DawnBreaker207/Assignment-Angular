import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:3000';
  Search = (data: any) => {
    return this.http.get(this.URL + `/products?name_like=${data}`);
  };
  Filter = (data: any) => {
    return this.http.get(this.URL + `/products?categories=${data}`);
  };
}
