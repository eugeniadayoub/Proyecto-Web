import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDuenoComponent } from './detalles-dueno.component';

describe('DetallesDuenoComponent', () => {
  let component: DetallesDuenoComponent;
  let fixture: ComponentFixture<DetallesDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDuenoComponent]
    });
    fixture = TestBed.createComponent(DetallesDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
