import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDiezMilComponent } from './modal-diez-mil.component';

describe('ModalDiezMilComponent', () => {
  let component: ModalDiezMilComponent;
  let fixture: ComponentFixture<ModalDiezMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDiezMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDiezMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
