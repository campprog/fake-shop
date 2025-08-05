import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IProduct } from "../interfaces/product.interface";

 @Injectable({
  providedIn: 'root'
 })
 export class ProductsService {
  private readonly _httpClient = inject(HttpClient);

  getProducts() {
    return this._httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
 }

