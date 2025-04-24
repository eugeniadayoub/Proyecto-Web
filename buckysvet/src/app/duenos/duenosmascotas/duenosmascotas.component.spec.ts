import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenosmascotasComponent } from './duenosmascotas.component';

describe('DuenosmascotasComponent', () => {
  let component: DuenosmascotasComponent;
  let fixture: ComponentFixture<DuenosmascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuenosmascotasComponent]
    });
    fixture = TestBed.createComponent(DuenosmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
