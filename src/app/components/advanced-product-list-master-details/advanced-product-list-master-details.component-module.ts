import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { AdvancedProductListMasterDetailsComponent } from './advanced-product-list-master-details.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [AdvancedProductListMasterDetailsComponent],
  providers: [],
  exports: [AdvancedProductListMasterDetailsComponent]
})
export class AdvancedProductListMasterDetailsComponentModule {
}
