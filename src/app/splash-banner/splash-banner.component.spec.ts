import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashBannerComponent } from './splash-banner.component';

describe('SplashBannerComponent', () => {
  let component: SplashBannerComponent;
  let fixture: ComponentFixture<SplashBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
