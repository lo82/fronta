import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuarentaMilComponent } from './modal-cuarenta-mil.component';

describe('ModalCuarentaMilComponent', () => {
  let component: ModalCuarentaMilComponent;
  let fixture: ComponentFixture<ModalCuarentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCuarentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCuarentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
