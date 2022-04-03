import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  // public items: OrderItemModel[] = [
  //   new OrderItemModel(new ProductModel('1', 'Coca-cola 600ml', 10), 1),
  //   new OrderItemModel(new ProductModel('2', 'Coxinha', 4), 2),
  // ];

  // public order: OrderModel = {
  //   client: 'Fake client',
  //   items: this.items,
  //   total: this.items.reduce<number>(
  //     (previous, currentItem) => previous + currentItem.total,
  //     0
  //   ),
  // };

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
    console.log('caiu aqui nessa merda');
    this.orderService.createOrder(this.order.items);
  }
}
