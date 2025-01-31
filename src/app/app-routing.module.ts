import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { DogPictureComponent } from './components/dog-picture/dog-picture.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { AgePredictorComponent } from './components/age-predictor/age-predictor.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import { AdvancedProductsListComponent } from './components/advanced-products-list/advanced-products-list.component';
import { AdvancedDeleteProductComponent } from './components/advanced-delete-product/advanced-delete-product.component';
import { AdvancedProductListMasterDetailsComponent } from './components/advanced-product-list-master-details/advanced-product-list-master-details.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';
import { PublicHolidayListComponentModule } from './components/public-holiday-list/public-holiday-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoryCheckboxComponentModule } from './components/category-checkbox/category-checkbox.component-module';
import { CategoryMenuComponentModule } from './components/category-menu/category-menu.component-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginsServiceModule } from './services/logins.service-module';
import { UserFormComponentModule } from './components/user-form/user-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { DogPictureComponentModule } from './components/dog-picture/dog-picture.component-module';
import { DogPictureServiceModule } from './services/dog-picture.service-module';
import { UserDetailComponentModule } from './components/user-detail/user-detail.component-module';
import { CartDetailComponentModule } from './components/cart-detail/cart-detail.component-module';
import { CartsServiceModule } from './services/carts.service-module';
import { AgePredictorComponentModule } from './components/age-predictor/age-predictor.component-module';
import { AgePredictorsServiceModule } from './services/age-predictors.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import { AdvancedProductsListComponentModule } from './components/advanced-products-list/advanced-products-list.component-module';
import { AdvancedDeleteProductComponentModule } from './components/advanced-delete-product/advanced-delete-product.component-module';
import { AdvancedProductListMasterDetailsComponentModule } from './components/advanced-product-list-master-details/advanced-product-list-master-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holiday', component: PublicHolidayListComponent }, { path: 'checkbox-categories', component: CategoryCheckboxComponent }, { path: 'categories-menu', component: CategoryMenuComponent }, { path: 'product-search', component: ProductTableComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginFormComponent }, { path: 'register', component: UserFormComponent }, { path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'dog-picture', component: DogPictureComponent }, { path: 'user/:id', component: UserDetailComponent }, { path: 'cart/:id', component: CartDetailComponent }, { path: 'age/:name', component: AgePredictorComponent }, { path: 'products/:category', component: FilteredProductListComponent }, { path: 'sort-product', component: SortedProductListComponent }, { path: 'filtered-products-on-subject', component: FilteredProductListSubjectComponent }, { path: 'advanced-product-list', component: AdvancedProductsListComponent }, { path: 'advanced-delete-product', component: AdvancedDeleteProductComponent }, { path: 'products-master-details', component: AdvancedProductListMasterDetailsComponent }, { path: 'selectProduct', component: AdvancedProductListMasterDetailsComponent }]
  ), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptosServiceModule, PublicHolidayListComponentModule, PublicHolidaysServiceModule, CategoryCheckboxComponentModule, CategoryMenuComponentModule, ProductTableComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, LoginFormComponentModule, LoginsServiceModule, UserFormComponentModule, UsersServiceModule, ProductDetailComponentModule, CatFactComponentModule, CatFactServiceModule, DogPictureComponentModule, DogPictureServiceModule, UserDetailComponentModule, CartDetailComponentModule, CartsServiceModule, AgePredictorComponentModule, AgePredictorsServiceModule, FilteredProductListComponentModule, SortedProductListComponentModule, FilteredProductListSubjectComponentModule, AdvancedProductsListComponentModule, AdvancedDeleteProductComponentModule, AdvancedProductListMasterDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
