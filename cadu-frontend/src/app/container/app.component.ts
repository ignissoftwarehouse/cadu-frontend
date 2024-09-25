import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationModule } from '../pages/presentation/presentation.module';
import { ProductListModule } from '../pages/product-list/product-list.module';
import { TensionOutModule } from "../pages/tension-out/tension-out.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationModule, ProductListModule, TensionOutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cadu-frontend';
}
