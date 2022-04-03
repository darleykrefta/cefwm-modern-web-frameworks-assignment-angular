import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItemModel } from '../models/order.item.model';
import { OrderModel } from '../models/order.model';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<ProductModel[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJ1c2VyQHVzZXIuY29tIiwianRpIjoiZTM2YTM1MmItNGNjYS00YTZmLThlZTEtNWQwYzBhMzIxZmFkIiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.tlx8gVuMWV8rpy7CL-lK2MrUlloceF7e-GS8QvDTu40',
    });

    return this.httpClient.get<ProductModel[]>(
      'http://localhost:8080/products',
      { headers: headers }
    );
  }

  public postOrder(): Observable<OrderModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJ1c2VyQHVzZXIuY29tIiwianRpIjoiZTM2YTM1MmItNGNjYS00YTZmLThlZTEtNWQwYzBhMzIxZmFkIiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.tlx8gVuMWV8rpy7CL-lK2MrUlloceF7e-GS8QvDTu40',
    });

    return this.httpClient.post<OrderModel>(
      'http://localhost:8080/orders',
      {
        restaurant: '00b8fd02-eba0-48ed-8806-8d88176f9c42',
        client: '8a473aae-7060-409c-a0c6-39cf9c2dd12b',
      },
      { headers: headers }
    );
  }

  public postOrderItems(
    orderId: string,
    items: OrderItemModel[]
  ): Observable<OrderItemModel[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJ1c2VyQHVzZXIuY29tIiwianRpIjoiZTM2YTM1MmItNGNjYS00YTZmLThlZTEtNWQwYzBhMzIxZmFkIiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.tlx8gVuMWV8rpy7CL-lK2MrUlloceF7e-GS8QvDTu40',
    });

    const itemsToCreate = items.map((item) => ({
      product: item.product.uuid,
      quantity: item.quantity,
    }));

    return this.httpClient.post<OrderItemModel[]>(
      `http://localhost:8080/orders/${orderId}/items`,
      { items: itemsToCreate },
      { headers: headers }
    );
  }
}
