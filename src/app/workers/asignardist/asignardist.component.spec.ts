import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignardistComponent } from './asignardist.component';

describe('AsignardistComponent', () => {
  let component: AsignardistComponent;
  let fixture: ComponentFixture<AsignardistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignardistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignardistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
