import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [
        AsyncPipe
    ],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
