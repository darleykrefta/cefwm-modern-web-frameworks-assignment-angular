import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public order: OrderModel;

  constructor(private orderService: OrderService, private router: Router) {
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
          next: () => {
            this.orderService.order = new OrderModel();
            this.router.navigate(['/products']);
          },
        });
      },
    });
  }
}
