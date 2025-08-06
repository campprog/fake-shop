import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  @Input() cardProducts:IProduct[]=[];
  @Output() buttonClicked = new  EventEmitter<void>();
  onBuyClick() {
     this.buttonClicked.emit();
  }
}
