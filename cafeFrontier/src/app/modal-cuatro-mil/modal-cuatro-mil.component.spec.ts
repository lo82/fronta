import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuatroMilComponent } from './modal-cuatro-mil.component';

describe('ModalCuatroMilComponent', () => {
  let component: ModalCuatroMilComponent;
  let fixture: ComponentFixture<ModalCuatroMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCuatroMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCuatroMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
