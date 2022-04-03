import { Component, OnInit } from '@angular/core';
import { ProductModel } from './models/product.model';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // public products: ProductModel[] = [
  //   new ProductModel('1', 'Coca-cola 600ml', 10),
  //   new ProductModel('2', 'Coxinha', 4),
  //   new ProductModel('3', 'Pastel', 3),
  //   new ProductModel('4', 'Pão de queijo', 2),
  // ];

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {
    this.products = productService.products;
  }

  public products: ProductModel[];

  ngOnInit(): void {}
}
