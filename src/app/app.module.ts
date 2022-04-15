import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { ApiService } from './services/api.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

import { ProductsComponent } from './modules/products';
import { OrderComponent } from './modules/order';

import { AppRoutingModule } from './app-routing.module';
import { CardProductComponent } from './components/card-product';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    OrderComponent,
    CardProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService, OrderService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
