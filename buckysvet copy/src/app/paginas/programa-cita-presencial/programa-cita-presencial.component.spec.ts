import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaCitaPresencialComponent } from './programa-cita-presencial.component';

describe('ProgramaCitaPresencialComponent', () => {
  let component: ProgramaCitaPresencialComponent;
  let fixture: ComponentFixture<ProgramaCitaPresencialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramaCitaPresencialComponent]
    });
    fixture = TestBed.createComponent(ProgramaCitaPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
