import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPage } from './heroes-page.component';

describe('Tab1Page', () => {
  let component: HeroesPage;
  let fixture: ComponentFixture<HeroesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
