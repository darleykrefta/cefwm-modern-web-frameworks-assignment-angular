import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product!: ProductModel;

  constructor(private orderService: OrderService) {}

  add(): void {
    this.orderService.addItem(this.product);
  }
  remove(): void {
    this.orderService.removeItem(this.product.uuid);
  }
}
