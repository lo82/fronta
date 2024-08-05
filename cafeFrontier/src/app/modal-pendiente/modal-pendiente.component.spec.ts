import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPendienteComponent } from './modal-pendiente.component';

describe('ModalPendienteComponent', () => {
  let component: ModalPendienteComponent;
  let fixture: ComponentFixture<ModalPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPendienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
