import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCientoVeinteMilComponent } from './modal-ciento-veinte-mil.component';

describe('ModalCientoVeinteMilComponent', () => {
  let component: ModalCientoVeinteMilComponent;
  let fixture: ComponentFixture<ModalCientoVeinteMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCientoVeinteMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCientoVeinteMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
