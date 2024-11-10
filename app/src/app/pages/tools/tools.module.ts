import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionButtonModule } from "../../shared/components/action-button/action-button.module";
import { ToolsComponent } from "./tools.component";

@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [ToolsComponent]
})
export class ToolsComponentModule { }
