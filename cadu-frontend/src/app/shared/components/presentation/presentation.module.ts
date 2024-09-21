import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { ActionButtonModule } from '../action-button/action-button.module';
import { DividerModule } from '../divider/divider/divider.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    ActionButtonModule,
    DividerModule
  ],
  exports: [PresentationComponent]
})
export class PresentationModule { }
