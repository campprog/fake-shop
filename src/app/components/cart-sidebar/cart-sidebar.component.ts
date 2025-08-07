import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-sidebar',
  imports: [AsyncPipe],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  @Input() isOpen = false;
  @Output() productRemoved = new EventEmitter<number>();

  readonly _productsManagerService = inject(ProductsManagerService);
  onCloseClick() {
    this.isOpen = false;
  }

  onRemoveProduct(productIndex:number) {
    this._productsManagerService.removeProductToCart(productIndex);
  }
}
