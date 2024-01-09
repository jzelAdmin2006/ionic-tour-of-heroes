import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  standalone: true,
  imports: [IonicModule],
})
export class HeroBadgeComponent {
  @Input() heroId!: number;
  @Input() index!: number;
}
