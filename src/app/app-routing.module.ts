import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ProductsComponent } from './modules/products';
import { OrderComponent } from './modules/order';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
