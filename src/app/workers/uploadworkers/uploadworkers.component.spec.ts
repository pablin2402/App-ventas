import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadworkersComponent } from './uploadworkers.component';

describe('UploadworkersComponent', () => {
  let component: UploadworkersComponent;
  let fixture: ComponentFixture<UploadworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
