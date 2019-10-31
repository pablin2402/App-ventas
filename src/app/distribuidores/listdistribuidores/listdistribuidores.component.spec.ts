import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdistribuidoresComponent } from './listdistribuidores.component';

describe('ListdistribuidoresComponent', () => {
  let component: ListdistribuidoresComponent;
  let fixture: ComponentFixture<ListdistribuidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdistribuidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdistribuidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
