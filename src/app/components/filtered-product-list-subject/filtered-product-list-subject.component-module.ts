import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListSubjectComponent } from './filtered-product-list-subject.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, RouterLink],
  declarations: [FilteredProductListSubjectComponent],
  providers: [],
  exports: [FilteredProductListSubjectComponent]
})
export class FilteredProductListSubjectComponentModule {
}
