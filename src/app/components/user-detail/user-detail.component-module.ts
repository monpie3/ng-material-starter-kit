import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [UserDetailComponent],
  providers: [],
  exports: [UserDetailComponent]
})
export class UserDetailComponentModule {
}
