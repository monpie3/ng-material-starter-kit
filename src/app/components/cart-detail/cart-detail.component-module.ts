import { NgModule } from '@angular/core';
import { CartDetailComponent } from './cart-detail.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [
        NgIf,
        MatCardModule,
        AsyncPipe
    ],
  declarations: [CartDetailComponent],
  providers: [],
  exports: [CartDetailComponent]
})
export class CartDetailComponentModule {
}
