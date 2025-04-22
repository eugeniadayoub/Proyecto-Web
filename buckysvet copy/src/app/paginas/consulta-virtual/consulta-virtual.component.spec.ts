import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVirtualComponent } from './consulta-virtual.component';

describe('ConsultaVirtualComponent', () => {
  let component: ConsultaVirtualComponent;
  let fixture: ComponentFixture<ConsultaVirtualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaVirtualComponent]
    });
    fixture = TestBed.createComponent(ConsultaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
