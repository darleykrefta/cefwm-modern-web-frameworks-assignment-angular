import { Injectable } from '@angular/core';
import { OrderItemModel } from '../models/order.item.model';
import { OrderModel } from '../models/order.model';
import { ProductModel } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable()
export class OrderService {
  public order: OrderModel = new OrderModel();

  constructor(private apiService: ApiService) {}

  addItem(product: ProductModel): void {
    const item = this.order.items.find(
      (orderItem) => orderItem.product.uuid === product.uuid
    );

    if (item) {
      item.quantity++;
    } else {
      this.order.items.push(new OrderItemModel(product, 1));
    }

    if (!this.order.total) {
      this.order.total = 0;
    }

    this.order.total += Number(product.price);
  }

  removeItem(productId: string): void {
    const item = this.order.items.find(
      (item) => item.product.uuid === productId
    );

    if (item) {
      item.quantity--;

      if (!this.order.total) {
        this.order.total = 0;
      }

      this.order.total -= item.product.price;

      if (item.quantity === 0) {
        this.order.items.splice(this.order.items.indexOf(item), 1);
      }
    }
  }

  createOrder(items: OrderItemModel[]): void {
    this.apiService.postOrder().subscribe({
      next: (order: OrderModel) => {
        this.apiService.postOrderItems(order.uuid, items).subscribe({
          next: (orderItems: OrderItemModel[]) => {
            this.order.items = orderItems;
          },
        });
      },
    });
  }
}
