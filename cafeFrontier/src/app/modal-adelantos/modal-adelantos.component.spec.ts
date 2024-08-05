import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdelantosComponent } from './modal-adelantos.component';

describe('ModalAdelantosComponent', () => {
  let component: ModalAdelantosComponent;
  let fixture: ComponentFixture<ModalAdelantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdelantosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdelantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
