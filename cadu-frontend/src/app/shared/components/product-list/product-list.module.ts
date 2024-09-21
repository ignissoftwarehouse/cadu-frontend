import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ActionButtonModule } from '../action-button/action-button.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [ProductListComponent]

})
export class ProductListModule { }
