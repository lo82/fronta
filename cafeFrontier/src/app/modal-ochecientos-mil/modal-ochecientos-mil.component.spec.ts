import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOchecientosMilComponent } from './modal-ochecientos-mil.component';

describe('ModalOchecientosMilComponent', () => {
  let component: ModalOchecientosMilComponent;
  let fixture: ComponentFixture<ModalOchecientosMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOchecientosMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOchecientosMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
