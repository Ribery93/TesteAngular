import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {SaleComponent} from './sale/sale.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {ServiceConfig} from "./service/service-config";
import {GenericService} from "./service/generic-service";
import { ListClientComponent } from './client/list-client/list-client.component';
import { MenuComponent } from './menu/menu.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ListSaleComponent } from './sale/list-sale/list-sale.component';
import { FormsModule } from '@angular/forms';
import {routing} from "../app.routes";
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SaleComponent,
    ProductComponent,
    ListClientComponent,
    MenuComponent,
    ListProductComponent,
    ListSaleComponent ,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
  ],
  providers: [ServiceConfig,GenericService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
