import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTragoCComponent } from './modal-trago-c.component';

describe('ModalTragoCComponent', () => {
  let component: ModalTragoCComponent;
  let fixture: ComponentFixture<ModalTragoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTragoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTragoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
