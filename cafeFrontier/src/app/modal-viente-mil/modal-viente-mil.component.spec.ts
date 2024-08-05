import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVienteMilComponent } from './modal-viente-mil.component';

describe('ModalVienteMilComponent', () => {
  let component: ModalVienteMilComponent;
  let fixture: ComponentFixture<ModalVienteMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVienteMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVienteMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
