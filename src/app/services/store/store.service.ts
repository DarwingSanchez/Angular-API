import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingList: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  /* En angular a las variables observadoras debemos ponerle
  el signo pesos a lo último. Es una buena práctica. */
  myCart$ = this.myCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this.shoppingList.push(product);
    this.myCart.next(this.shoppingList);
  }

  getShoppingList() {
    return this.shoppingList;
  }

  getTotal() {
    return this.shoppingList.reduce((sum, item) => sum + item.price, 0);
  }
}
