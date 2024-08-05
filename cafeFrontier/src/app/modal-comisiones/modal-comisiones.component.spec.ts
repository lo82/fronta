import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComisionesComponent } from './modal-comisiones.component';

describe('ModalComisionesComponent', () => {
  let component: ModalComisionesComponent;
  let fixture: ComponentFixture<ModalComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
