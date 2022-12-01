import { NgModule } from '@angular/core';
import { AgePredictorComponent } from './age-predictor.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [
        NgIf,
        AsyncPipe,
        MatCardModule
    ],
  declarations: [AgePredictorComponent],
  providers: [],
  exports: [AgePredictorComponent]
})
export class AgePredictorComponentModule {
}
