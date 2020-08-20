import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaListComponent } from './insta-list.component';

describe('InstaListComponent', () => {
  let component: InstaListComponent;
  let fixture: ComponentFixture<InstaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
