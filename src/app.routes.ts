import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListClientComponent} from "./app/client/list-client/list-client.component";
import {ListSaleComponent} from "./app/sale/list-sale/list-sale.component";
import {ListProductComponent} from "./app/product/list-product/list-product.component";
import {ProductComponent} from "./app/product/product.component";
import {SaleComponent} from "./app/sale/sale.component";
import {ClientComponent} from "./app/client/client.component";



const appRoutes: Routes = [
  { path: 'list-client',                    component: ListClientComponent },
  { path: '',                        component: ListClientComponent },
  { path: 'list-product',         component: ListProductComponent },
  { path: 'list-sale',         component: ListSaleComponent },
  { path: 'add-product',         component: ProductComponent },
  { path: 'add-sale',         component: SaleComponent },
  { path: 'add-client', component: ClientComponent },
  { path: 'add-product/:codigo',         component: ProductComponent },
  { path: 'add-sale/:codigo',         component: SaleComponent },
  { path: 'add-client/:codigo', component: ClientComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
