import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  imports: [AsyncPipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  readonly _productsManagerService = inject(ProductsManagerService);
onBuyClick( length: number | undefined) {
     alert(`Comprou ${length} produtos`)
  }
}
