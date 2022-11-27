import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [MatTableModule, MatCardModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
