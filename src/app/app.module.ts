import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productsListComponent } from './products-list.component';
import { productDepartmentComponent } from './product-department.component';
import { productImageComponent } from './product-image.component';
import { productPriceComponent } from './product-price.component';
import { productRowComponent } from './product-row.component';


@NgModule({
  declarations: [
    AppComponent,
    productsListComponent,
    productDepartmentComponent,
    productImageComponent,
    productPriceComponent,
    productRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
