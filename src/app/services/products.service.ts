import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IProduct } from "../interfaces/product.interface";
import { ProductsManagerService } from "./products-manager.service";
import { tap } from "rxjs";

 @Injectable({
  providedIn: 'root'
 })
 export class ProductsService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _productsManagerService = inject(ProductsManagerService);

  getProducts() {
    return this._httpClient.get<IProduct[]>('https://fakestoreapi.com/products').pipe(tap((productsReponse) => this._productsManagerService.addProducts(productsReponse)));
  }
 }

