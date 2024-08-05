import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClientessComponent } from './menu-clientess.component';

describe('MenuClientessComponent', () => {
  let component: MenuClientessComponent;
  let fixture: ComponentFixture<MenuClientessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuClientessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuClientessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
