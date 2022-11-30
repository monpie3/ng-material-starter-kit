import { NgModule } from '@angular/core';
import { DogPictureComponent } from './dog-picture.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
    imports: [
        NgIf,
        AsyncPipe
    ],
  declarations: [DogPictureComponent],
  providers: [],
  exports: [DogPictureComponent]
})
export class DogPictureComponentModule {
}
