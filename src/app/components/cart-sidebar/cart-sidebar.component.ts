import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-sidebar',
  imports: [],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  @Input() isOpen = false;
  @Input() cardProducts:IProduct[] = [];

  @Output() productRemoved = new EventEmitter<number>();

  onCloseClick() {
    this.isOpen = false;
  }

  onRemoveProduct(productIndex:number) {
    this.productRemoved.emit(productIndex);
  }
}
