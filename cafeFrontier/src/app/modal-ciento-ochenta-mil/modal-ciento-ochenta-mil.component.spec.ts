import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCientoOchentaMilComponent } from './modal-ciento-ochenta-mil.component';

describe('ModalCientoOchentaMilComponent', () => {
  let component: ModalCientoOchentaMilComponent;
  let fixture: ComponentFixture<ModalCientoOchentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCientoOchentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCientoOchentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
