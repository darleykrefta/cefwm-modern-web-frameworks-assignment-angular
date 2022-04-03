import { OrderItemModel } from './order.item.model';

export class OrderModel {
  public uuid: string;
  public client: string;
  public items: OrderItemModel[];
  public total?: number;

  constructor(
    uuid: string = '',
    client: string = '',
    items: OrderItemModel[] = [],
    total: number = 0
  ) {
    this.uuid = uuid;
    this.client = client;
    this.items = items;
    this.total = total;
  }
}
