import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDuenosComponent } from './modificar-duenos.component';

describe('ModificarDuenosComponent', () => {
  let component: ModificarDuenosComponent;
  let fixture: ComponentFixture<ModificarDuenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarDuenosComponent]
    });
    fixture = TestBed.createComponent(ModificarDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
