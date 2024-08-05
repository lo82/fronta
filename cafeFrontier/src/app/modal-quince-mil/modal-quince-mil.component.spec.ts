import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuinceMilComponent } from './modal-quince-mil.component';

describe('ModalQuinceMilComponent', () => {
  let component: ModalQuinceMilComponent;
  let fixture: ComponentFixture<ModalQuinceMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuinceMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuinceMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
