import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDuenosComponent } from './informacion-duenos.component';

describe('InformacionDuenosComponent', () => {
  let component: InformacionDuenosComponent;
  let fixture: ComponentFixture<InformacionDuenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionDuenosComponent]
    });
    fixture = TestBed.createComponent(InformacionDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
