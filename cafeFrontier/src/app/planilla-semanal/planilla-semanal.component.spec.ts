import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillaSemanalComponent } from './planilla-semanal.component';

describe('PlanillaSemanalComponent', () => {
  let component: PlanillaSemanalComponent;
  let fixture: ComponentFixture<PlanillaSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanillaSemanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanillaSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
