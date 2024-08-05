import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOchentaMilComponent } from './modal-ochenta-mil.component';

describe('ModalOchentaMilComponent', () => {
  let component: ModalOchentaMilComponent;
  let fixture: ComponentFixture<ModalOchentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOchentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOchentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
