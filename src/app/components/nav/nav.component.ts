import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  quantity: number = 0;
  totalPrice: number = 0;
  activeMenu = false;
  activeShoppinMenu = false;
  shoppingList: Product[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.shoppingList = this.storeService.getShoppingList();
      this.totalPrice = this.storeService.getTotal();
      this.quantity = this.shoppingList.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
  toggleShoppinMenu() {
    this.activeShoppinMenu = !this.activeShoppinMenu;
  }
}
