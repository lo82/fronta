import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalC4Component } from './modal-c4.component';

describe('ModalC4Component', () => {
  let component: ModalC4Component;
  let fixture: ComponentFixture<ModalC4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalC4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
