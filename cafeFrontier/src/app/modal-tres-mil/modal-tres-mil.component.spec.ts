import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTresMilComponent } from './modal-tres-mil.component';

describe('ModalTresMilComponent', () => {
  let component: ModalTresMilComponent;
  let fixture: ComponentFixture<ModalTresMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTresMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTresMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
