import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input()
  product!: ProductModel;

  randomInt: number;
  constructor(private orderService: OrderService) {
    this.randomInt = Math.floor(Math.random() * 250);
  }

  add(): void {
    this.orderService.addItem(this.product);
  }
}
