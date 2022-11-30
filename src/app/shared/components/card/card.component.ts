import { Component, Input } from '@angular/core';

@Component({
  selector: 'tkm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hasShadow = false;
  @Input() hasSmall = false;
  @Input() hasMedium = false;
  @Input() hasLinkable = false;
}
