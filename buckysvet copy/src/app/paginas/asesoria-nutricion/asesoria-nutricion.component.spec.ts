import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaNutricionComponent } from './asesoria-nutricion.component';

describe('AsesoriaNutricionComponent', () => {
  let component: AsesoriaNutricionComponent;
  let fixture: ComponentFixture<AsesoriaNutricionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoriaNutricionComponent]
    });
    fixture = TestBed.createComponent(AsesoriaNutricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
