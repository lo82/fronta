import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTragosMasivosComponent } from './modal-tragos-masivos.component';

describe('ModalTragosMasivosComponent', () => {
  let component: ModalTragosMasivosComponent;
  let fixture: ComponentFixture<ModalTragosMasivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTragosMasivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTragosMasivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
