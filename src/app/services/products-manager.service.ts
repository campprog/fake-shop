import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { IProduct } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
private readonly products = new BehaviorSubject<IProduct[]>([]);
readonly products$ = this.products.asObservable().pipe(
  map((productList) => structuredClone(productList))
);

private readonly cartProducts = new BehaviorSubject<IProduct[]>([]);
readonly cartProducts$ = this.cartProducts.asObservable().pipe(
  map((cartProductList) => structuredClone(cartProductList)));

  addProducts(products:IProduct[]) {
    this.products.next(products);
  }

  addProductTocart(product:IProduct) {
    const currentList = this.cartProducts.value;

    const newList = [...currentList, product];

    this.cartProducts.next(newList);
  }

  removeProductToCart (productIndex: number) {
    const newList = this.cartProducts.value;
    newList.splice(productIndex,1);
    this.cartProducts.next(newList);
  }
}
