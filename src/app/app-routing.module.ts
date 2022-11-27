import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {PublicHolidayListComponent} from './components/public-holiday-list/public-holiday-list.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptosServiceModule} from './services/cryptos.service-module';
import {PublicHolidayListComponentModule} from './components/public-holiday-list/public-holiday-list.component-module';
import {PublicHolidaysServiceModule} from './services/public-holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{path: 'products', component: ProductListComponent}, {
      path: 'categories',
      component: CategoryListComponent
    }, {path: 'crypto', component: CryptoListComponent}, {
      path: 'public-holiday',
      component: PublicHolidayListComponent
    }]
  ), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptosServiceModule, PublicHolidayListComponentModule, PublicHolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
