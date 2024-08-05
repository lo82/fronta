import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDieciochoMilComponent } from './modal-dieciocho-mil.component';

describe('ModalDieciochoMilComponent', () => {
  let component: ModalDieciochoMilComponent;
  let fixture: ComponentFixture<ModalDieciochoMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDieciochoMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDieciochoMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
