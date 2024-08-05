import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarzonesComponent } from './garzones.component';

describe('GarzonesComponent', () => {
  let component: GarzonesComponent;
  let fixture: ComponentFixture<GarzonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarzonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
