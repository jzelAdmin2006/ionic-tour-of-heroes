import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBadgeComponent } from './hero-badge.component';

describe('HeroBadgeComponent', () => {
  let component: HeroBadgeComponent;
  let fixture: ComponentFixture<HeroBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBadgeComponent]
    });
    fixture = TestBed.createComponent(HeroBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
