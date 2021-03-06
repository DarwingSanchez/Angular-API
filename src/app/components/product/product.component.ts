import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  @Output() addedProduct = new EventEmitter<Product>();

  addToCart(){
    this.addedProduct.emit(this.product)
  }
}
