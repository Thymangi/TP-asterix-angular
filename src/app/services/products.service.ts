import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = '/assets/data/products.json'; // Chemin vers votre fichier JSON

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProduct(id: string): Observable<any> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}
