import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTfulComponent } from './restful.component';

describe('RESTfulComponent', () => {
  let component: RESTfulComponent;
  let fixture: ComponentFixture<RESTfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RESTfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RESTfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
