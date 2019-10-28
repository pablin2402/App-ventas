import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCookieComponent } from './details-cookie.component';

describe('DetailsCookieComponent', () => {
  let component: DetailsCookieComponent;
  let fixture: ComponentFixture<DetailsCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
