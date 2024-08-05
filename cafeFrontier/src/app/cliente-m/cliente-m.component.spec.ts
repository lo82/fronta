import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMComponent } from './cliente-m.component';

describe('ClienteMComponent', () => {
  let component: ClienteMComponent;
  let fixture: ComponentFixture<ClienteMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
