import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public order: OrderModel;

  constructor(private orderService: OrderService) {
    this.order = orderService.order;
  }

  ngOnInit(): void {
    this.order.total = 0;
    for (let item of this.order.items) {
      this.order.total += Number(item.product.price);
    }
  }

  create() {
    this.orderService.createOrder(this.order.items);
  }
}
