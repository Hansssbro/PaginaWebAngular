import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentecComponent } from './componentec.component';

describe('ComponentecComponent', () => {
  let component: ComponentecComponent;
  let fixture: ComponentFixture<ComponentecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
