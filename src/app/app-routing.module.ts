import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {PublicHolidayListComponent} from './components/public-holiday-list/public-holiday-list.component';
import {CategoryCheckboxComponent} from './components/category-checkbox/category-checkbox.component';
import {CategoryMenuComponent} from './components/category-menu/category-menu.component';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptosServiceModule} from './services/cryptos.service-module';
import {PublicHolidayListComponentModule} from './components/public-holiday-list/public-holiday-list.component-module';
import {PublicHolidaysServiceModule} from './services/public-holidays.service-module';
import {CategoryCheckboxComponentModule} from './components/category-checkbox/category-checkbox.component-module';
import {CategoryMenuComponentModule} from './components/category-menu/category-menu.component-module';
import {ProductTableComponentModule} from './components/product-table/product-table.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{path: 'products', component: ProductListComponent}, {
      path: 'categories',
      component: CategoryListComponent
    }, {path: 'crypto', component: CryptoListComponent}, {
      path: 'public-holiday',
      component: PublicHolidayListComponent
    }, {path: 'checkbox-categories', component: CategoryCheckboxComponent}, {
      path: 'categories-menu',
      component: CategoryMenuComponent
    }, {path: 'product-search', component: ProductTableComponent}, {
      path: 'create-product',
      component: ProductFormComponent
    }]
  ), ProductListComponentModule, ProductsServiceModule,
    CategoryListComponentModule, CategoriesServiceModule,
    CryptoListComponentModule, CryptosServiceModule,
    PublicHolidayListComponentModule, PublicHolidaysServiceModule,
    CategoryCheckboxComponentModule, CategoryMenuComponentModule,
    ProductTableComponentModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
