import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListModule } from '../shared/components/product-list/product-list.module';
import { PresentationModule } from '../shared/components/presentation/presentation.module';

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
