import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSedeNorteComponent } from './hospital-sede-norte.component';

describe('HospitalSedeNorteComponent', () => {
  let component: HospitalSedeNorteComponent;
  let fixture: ComponentFixture<HospitalSedeNorteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalSedeNorteComponent]
    });
    fixture = TestBed.createComponent(HospitalSedeNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
