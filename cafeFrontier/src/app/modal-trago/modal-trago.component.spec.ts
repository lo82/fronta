import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTragoComponent } from './modal-trago.component';

describe('ModalTragoComponent', () => {
  let component: ModalTragoComponent;
  let fixture: ComponentFixture<ModalTragoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTragoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
