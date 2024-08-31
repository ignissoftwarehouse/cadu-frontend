import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent { }
