import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-component-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {
    this.products = productService.products;
  }

  public products: ProductModel[];

  ngOnInit(): void {}
}
