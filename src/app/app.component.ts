import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { ProductsService } from './services/products.service';
import { IProduct } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ProductListComponent,
    CartSummaryComponent,
    CartSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly _productsService = inject(ProductsService);

  products:IProduct[] = [];
  cardProducts:IProduct[] =[];
  isSideBarOpen = false;
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productsService.getProducts().subscribe((productResponse) => {
      this.products = productResponse;
    });
  }

  addProductToCart(product: IProduct){
    this.cardProducts.push(product);
    console.log(this.cardProducts);
  }

  removeProductToCard(productIndex: number) {
    this.cardProducts.splice(productIndex, 1);
  }

  onBuyProducts() {
    alert(`Comprou ${this.cardProducts.length} produtos`);
  }
}
