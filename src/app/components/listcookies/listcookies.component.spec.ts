import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcookiesComponent } from './listcookies.component';

describe('ListcookiesComponent', () => {
  let component: ListcookiesComponent;
  let fixture: ComponentFixture<ListcookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
