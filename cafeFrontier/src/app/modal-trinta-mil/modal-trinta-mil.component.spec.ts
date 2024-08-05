import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrintaMilComponent } from './modal-trinta-mil.component';

describe('ModalTrintaMilComponent', () => {
  let component: ModalTrintaMilComponent;
  let fixture: ComponentFixture<ModalTrintaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTrintaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTrintaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
