import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { ProductComponent } from './components/product';
import { OrderComponent } from './components/order';
import { ApiService } from './services/api.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    OrderComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService, OrderService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
