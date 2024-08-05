import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCincuentaMilComponent } from './modal-cincuenta-mil.component';

describe('ModalCincuentaMilComponent', () => {
  let component: ModalCincuentaMilComponent;
  let fixture: ComponentFixture<ModalCincuentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCincuentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCincuentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
