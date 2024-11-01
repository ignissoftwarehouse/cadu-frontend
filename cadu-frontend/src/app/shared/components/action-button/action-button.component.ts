import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() public src!: string;
  @Input() public alt!: string;
  @Input() variant: 'primary' | 'secondary' | 'white'  = 'primary';
  @Input() size?: string;
  @Input() height?: string = '63px';
  @Input() icon: boolean = false;
  @Input() buttonText!: string;
}
