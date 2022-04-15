import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  order: OrderModel;

  constructor(private os: OrderService) {
    this.order = os.order;
  }

  ngOnInit(): void {}
}
