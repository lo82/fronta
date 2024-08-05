import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSesentaMilComponent } from './modal-sesenta-mil.component';

describe('ModalSesentaMilComponent', () => {
  let component: ModalSesentaMilComponent;
  let fixture: ComponentFixture<ModalSesentaMilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSesentaMilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSesentaMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
