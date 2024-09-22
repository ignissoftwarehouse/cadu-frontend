import { NgModule } from "@angular/core";
import { TensionOutComponent } from "./tension-out.component";
import { CommonModule } from "@angular/common";
import { ActionButtonModule } from "../../shared/components/action-button/action-button.module";

@NgModule({
  declarations: [TensionOutComponent],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [TensionOutComponent]
})
export class TensionOutModule { }
