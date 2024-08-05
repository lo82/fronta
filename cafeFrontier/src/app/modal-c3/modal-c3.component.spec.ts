import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalC3Component } from './modal-c3.component';

describe('ModalC3Component', () => {
  let component: ModalC3Component;
  let fixture: ComponentFixture<ModalC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalC3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
