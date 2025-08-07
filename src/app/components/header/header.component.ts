import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  @Output() buttonClicked = new EventEmitter<void>();
  readonly _productsManagerService = inject(ProductsManagerService);

  onCartButtonClick() {
    this.buttonClicked.emit();
  }
}

