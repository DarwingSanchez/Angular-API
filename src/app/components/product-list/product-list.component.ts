import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store/store.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  shoppingList: Product[] = [];
  products: Product[] = [];
  total: Number = 0;

  constructor(
    private storeService: StoreService,
    private producstService: ProductsService
  ) {
    this.shoppingList = this.storeService.getShoppingList();
  }

  ngOnInit(): void {
    this.producstService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  /*
    Esto era para hacer las pruebas ahora nos traemos los
    datos de una peticion de API

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random',
    },
  ]; */

  onAddShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  /* Pipes para repazar el concepto */
  today = new Date();
  string = 'HoLa MoDoNoO';
}
