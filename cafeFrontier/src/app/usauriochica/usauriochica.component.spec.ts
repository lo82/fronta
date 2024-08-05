import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsauriochicaComponent } from './usauriochica.component';

describe('UsauriochicaComponent', () => {
  let component: UsauriochicaComponent;
  let fixture: ComponentFixture<UsauriochicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsauriochicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsauriochicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
