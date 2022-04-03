import { ProductModel } from './product.model';

export class OrderItemModel {
  public product: ProductModel;
  public quantity: number;
  public total: number;

  constructor(product: ProductModel, quantity: number) {
    this.product = product;
    this.total = product.price * quantity;
    this.quantity = quantity;
  }
}
