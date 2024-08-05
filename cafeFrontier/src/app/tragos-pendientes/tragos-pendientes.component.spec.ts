import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TragosPendientesComponent } from './tragos-pendientes.component';

describe('TragosPendientesComponent', () => {
  let component: TragosPendientesComponent;
  let fixture: ComponentFixture<TragosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TragosPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TragosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
