import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonModule } from '../../shared/components/action-button/action-button.module';
import { RoutineComponent } from './routine.component';

@NgModule({
  declarations: [RoutineComponent],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [RoutineComponent]

})
export class RoutineModule { }
