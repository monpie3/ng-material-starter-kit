import { NgModule } from '@angular/core';
import { AdvancedProductsListComponent } from './advanced-products-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
    imports: [
        MatCardModule,
        MatListModule,
        NgForOf,
        AsyncPipe
    ],
  declarations: [AdvancedProductsListComponent],
  providers: [],
  exports: [AdvancedProductsListComponent]
})
export class AdvancedProductsListComponentModule {
}
