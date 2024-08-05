import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeChicasComponent } from './informe-chicas.component';

describe('InformeChicasComponent', () => {
  let component: InformeChicasComponent;
  let fixture: ComponentFixture<InformeChicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeChicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeChicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
