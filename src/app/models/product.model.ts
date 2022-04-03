export class ProductModel {
  public uuid: string;
  public name: string;
  public price: number;

  constructor(uuid: string, name: string, price: number) {
    this.uuid = uuid;
    this.name = name;
    this.price = price;
  }
}
