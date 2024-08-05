import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCincoMilComponent } from './modal-cinco-mil.component';

describe('ModalCincoMilComponent', () => {
  let component: ModalCincoMilComponent;
  let fixture: ComponentFixture<ModalCincoMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCincoMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCincoMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
