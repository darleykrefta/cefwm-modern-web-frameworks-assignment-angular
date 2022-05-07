import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProducts(): Observable<ProductModel[]> {
    return this.apiService.getProducts();
  }
}
