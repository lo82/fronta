import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilchicaComponent } from './perfilchica.component';

describe('PerfilchicaComponent', () => {
  let component: PerfilchicaComponent;
  let fixture: ComponentFixture<PerfilchicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilchicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilchicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
