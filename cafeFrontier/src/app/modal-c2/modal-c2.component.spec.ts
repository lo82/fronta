import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalC2Component } from './modal-c2.component';

describe('ModalC2Component', () => {
  let component: ModalC2Component;
  let fixture: ComponentFixture<ModalC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalC2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
