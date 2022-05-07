import { Component, OnInit } from '@angular/core';
import { OrderItemModel } from 'src/app/models/order.item.model';
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

  createOrder() {
    this.orderService.createOrder().subscribe({
      next: (order: OrderModel) => {
        this.orderService.createOrderItems(order, this.order.items).subscribe({
          next: (orderItems: OrderItemModel[]) => {
            this.order.items = orderItems;
          },
        });
      },
    });
  }
}
