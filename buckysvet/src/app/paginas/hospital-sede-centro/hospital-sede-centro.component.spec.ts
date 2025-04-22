import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSedeCentroComponent } from './hospital-sede-centro.component';

describe('HospitalSedeCentroComponent', () => {
  let component: HospitalSedeCentroComponent;
  let fixture: ComponentFixture<HospitalSedeCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalSedeCentroComponent]
    });
    fixture = TestBed.createComponent(HospitalSedeCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
