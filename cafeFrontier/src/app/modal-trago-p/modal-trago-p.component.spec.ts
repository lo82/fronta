import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTragoPComponent } from './modal-trago-p.component';

describe('ModalTragoPComponent', () => {
  let component: ModalTragoPComponent;
  let fixture: ComponentFixture<ModalTragoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTragoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTragoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
