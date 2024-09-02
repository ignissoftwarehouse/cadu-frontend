import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationModule } from '../pages/presentation/presentation.module';
import { ProductListModule } from '../shared/components/product-list/product-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationModule, ProductListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cadu-frontend';
}
