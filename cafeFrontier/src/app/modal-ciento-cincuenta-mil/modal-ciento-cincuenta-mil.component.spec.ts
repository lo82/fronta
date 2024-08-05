import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCientoCincuentaMilComponent } from './modal-ciento-cincuenta-mil.component';

describe('ModalCientoCincuentaMilComponent', () => {
  let component: ModalCientoCincuentaMilComponent;
  let fixture: ComponentFixture<ModalCientoCincuentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCientoCincuentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCientoCincuentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
