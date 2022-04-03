import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {
  public products: ProductModel[] = [];

  constructor(private apiService: ApiService) {
    apiService.getProducts().subscribe({
      next: (products: ProductModel[]) => {
        this.products.push(...products);
      },
    });
  }
}
