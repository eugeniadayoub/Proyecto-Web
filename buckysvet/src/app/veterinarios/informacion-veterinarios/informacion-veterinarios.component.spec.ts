import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionVeterinariosComponent } from './informacion-veterinarios.component';

describe('InformacionVeterinariosComponent', () => {
  let component: InformacionVeterinariosComponent;
  let fixture: ComponentFixture<InformacionVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionVeterinariosComponent]
    });
    fixture = TestBed.createComponent(InformacionVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
