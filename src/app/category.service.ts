import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:3000/categories';

  Get_All_Product = (): Observable<any> => {
    return this.http.get(this.URL);
  };

  Add_Product = (data: Category): Observable<any> => {
    return this.http.post(this.URL, data);
  };
}
