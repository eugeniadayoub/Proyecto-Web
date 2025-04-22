import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanosBuckysvetComponent } from './banos-buckysvet.component';

describe('BanosBuckysvetComponent', () => {
  let component: BanosBuckysvetComponent;
  let fixture: ComponentFixture<BanosBuckysvetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanosBuckysvetComponent]
    });
    fixture = TestBed.createComponent(BanosBuckysvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
