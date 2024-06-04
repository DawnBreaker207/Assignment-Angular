import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:3000/products';

  Get_All_Product = (): Observable<any> => {
    return this.http.get(this.URL);
  };
  Get_Id_Product = (id: string): Observable<any> => {
    return this.http.get(this.URL + `/${id}`);
  };
  Add_Product = (data: Product): Observable<any> => {
    return this.http.post(this.URL, data);
  };
  Update_Product = (id: string, data: Product): Observable<any> => {
    return this.http.put(this.URL + `/${id}`, data);
  };
  Delete_Product = (id: string | number): Observable<any> => {
    return this.http.delete(this.URL + `/${id}`);
  };
}
