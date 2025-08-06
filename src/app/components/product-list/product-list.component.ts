import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  @Input() products:IProduct[] = [];
  @Output() productSelected = new EventEmitter<IProduct>();

  loadProducts() {
    throw new Error('Method not implemented.');
  }
  addToCart(product: IProduct) {
  this.productSelected.emit(product);
  }

}
