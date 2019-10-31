import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcookieComponent } from './addcookie.component';

describe('AddcookieComponent', () => {
  let component: AddcookieComponent;
  let fixture: ComponentFixture<AddcookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
