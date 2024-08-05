import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBonificacionComponent } from './modal-bonificacion.component';

describe('ModalBonificacionComponent', () => {
  let component: ModalBonificacionComponent;
  let fixture: ComponentFixture<ModalBonificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBonificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBonificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
