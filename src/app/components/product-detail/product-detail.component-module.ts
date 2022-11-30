import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    AsyncPipe,
    MatCardModule,
    NgIf
  ],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
