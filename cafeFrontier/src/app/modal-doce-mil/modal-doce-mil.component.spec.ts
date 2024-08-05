import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDoceMilComponent } from './modal-doce-mil.component';

describe('ModalDoceMilComponent', () => {
  let component: ModalDoceMilComponent;
  let fixture: ComponentFixture<ModalDoceMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDoceMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDoceMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
