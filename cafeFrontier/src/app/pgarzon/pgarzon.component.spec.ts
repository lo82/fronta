import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgarzonComponent } from './pgarzon.component';

describe('PgarzonComponent', () => {
  let component: PgarzonComponent;
  let fixture: ComponentFixture<PgarzonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgarzonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgarzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
