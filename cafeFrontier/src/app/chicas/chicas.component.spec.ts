import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicasComponent } from './chicas.component';

describe('ChicasComponent', () => {
  let component: ChicasComponent;
  let fixture: ComponentFixture<ChicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
