import { Component, Input } from '@angular/core';
import { Variants } from 'src/app/config/enums';

@Component({
  selector: 'tkm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: Variants = Variants.Default;
  public variants = Variants;

  constructor() { }
}
