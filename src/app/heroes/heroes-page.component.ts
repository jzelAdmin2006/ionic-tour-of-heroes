import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroBadgeComponent } from '../hero-badge/hero-badge.component';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes-page.component.html',
  styleUrls: ['heroes-page.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonButtons,
    IonButton,
    IonIcon,
    NgForOf,
    AsyncPipe,
    RouterLink,
    HeroBadgeComponent,
    NgIf,
    IonList,
    IonItemDivider,
    IonItem,
  ],
})
export class HeroesPage {
  private heroService = inject(HeroService);

  heroes$: Observable<Hero[]> = this.heroService.getHeroes();
}
