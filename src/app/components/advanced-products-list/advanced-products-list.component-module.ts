import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {FlexModule} from '@angular/flex-layout/flex';
import {AdvancedProductsListComponent} from './advanced-products-list.component';


@NgModule({
    imports: [
        MatCardModule, MatListModule, CommonModule, FlexModule
    ],
    declarations: [AdvancedProductsListComponent],
    providers: [],
    exports: [AdvancedProductsListComponent]
})
export class AdvancedProductsListComponentModule {
}
