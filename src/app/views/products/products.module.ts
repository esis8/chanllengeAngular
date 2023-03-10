import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule
  ],
  declarations: [ ProductsComponent ]
})
export class ProductsModule { }
