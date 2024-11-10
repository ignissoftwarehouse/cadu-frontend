import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { ActionButtonModule } from '../../shared/components/action-button/action-button.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [PresentationComponent]
})
export class PresentationModule { }
