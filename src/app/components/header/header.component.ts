import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() products:IProduct[]= [];
  @Output() buttonClicked = new EventEmitter<void>();
  onCartButtonClick() {
    this.buttonClicked.emit();
  }
}

