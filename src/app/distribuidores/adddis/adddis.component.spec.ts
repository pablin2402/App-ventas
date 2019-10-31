import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddisComponent } from './adddis.component';

describe('AdddisComponent', () => {
  let component: AdddisComponent;
  let fixture: ComponentFixture<AdddisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
